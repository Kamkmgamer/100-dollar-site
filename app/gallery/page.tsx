import { delay } from '@/lib/delays';
import { TemplateLayout } from '@/components/TemplateLayout';
import Image from 'next/image';

const galleryImages = [
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
  'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80',
  'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80',
  'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80',
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80',
];

export default async function GalleryPage() {
  await delay(300);

  return (
    <TemplateLayout>
      <div className="page-header">
        <h1>Gallery</h1>
      </div>

      <div className="page-content">
        <div className="gallery-grid">
          {galleryImages.map((image, i) => (
            <div key={i} className="gallery-item">
              <Image
                src={image}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </TemplateLayout>
  );
}
