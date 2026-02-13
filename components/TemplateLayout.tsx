import { TemplateHeader } from './TemplateHeader';
import { TemplateFooter } from './TemplateFooter';

interface TemplateLayoutProps {
  children: React.ReactNode;
}

export function TemplateLayout({ children }: TemplateLayoutProps) {
  return (
    <div className="template-wrapper">
      <TemplateHeader />
      <main>{children}</main>
      <TemplateFooter />
    </div>
  );
}
