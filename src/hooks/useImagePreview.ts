import * as React from 'react';

const useImagePreview = (
  files: FileList | null,
  fieldName?: string,
  initialValue: string = '',
) => {
  const [preview, setPreview] = React.useState<string>(initialValue);
  const file = React.useMemo(() => new FileReader(), []);

  const clearPreview = React.useCallback(() => setPreview(''), []);

  React.useEffect(() => {
    if (initialValue) setPreview(initialValue);
    if (files?.[0]) file.readAsDataURL(files[0]);

    file.onload = () => {
      setPreview((file?.result as string) ?? '');
    };

    return () => clearPreview();
  }, [files, fieldName, file, initialValue, clearPreview]);

  return { preview, clearPreview };
};

export default useImagePreview;
