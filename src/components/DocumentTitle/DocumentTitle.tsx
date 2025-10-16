/**
 * This component is used to set the document title.
 * It is a wrapper around the title element that
 * sets the document title to the given title.
 *
 */

type DocumentTitleProps = {
  title: string;
  pattern?: string;
};

const DocumentTitle = ({
  title,
  pattern = 'Vite Starter | %s',
}: DocumentTitleProps) => (
  <title>{title ? pattern.replace('%s', title) : title}</title>
);

export default DocumentTitle;
