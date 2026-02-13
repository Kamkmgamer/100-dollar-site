import { delay } from '@/lib/delays';
import { TemplateLayout } from '@/components/TemplateLayout';

export default async function MenuPage() {
  await delay(1500);

  const appetizers = [
    { name: 'Bruschetta', desc: 'Toasted bread with tomatoes', price: '$8' },
    { name: 'Calamari', desc: 'Crispy fried squid rings', price: '$12' },
    { name: 'Caprese Salad', desc: 'Fresh mozzarella and tomatoes', price: '$10' },
  ];

  const pastas = [
    { name: 'Spaghetti Carbonara', desc: 'Classic Roman pasta', price: '$16' },
    { name: 'Fettuccine Alfredo', desc: 'Creamy parmesan sauce', price: '$15' },
    { name: 'Lasagna', desc: 'Layered pasta with meat', price: '$18' },
  ];

  const mains = [
    { name: 'Chicken Parmesan', desc: 'Breaded chicken with marinara', price: '$20' },
    { name: 'Grilled Salmon', desc: 'Fresh Atlantic salmon', price: '$24' },
    { name: 'Veal Marsala', desc: 'Classic Italian veal dish', price: '$26' },
  ];

  return (
    <TemplateLayout>
      <div className="page-header">
        <h1>Our Menu</h1>
      </div>

      <div className="page-content">
        <div className="menu-category">
          <h2>Appetizers</h2>
          <div className="menu-list">
            {appetizers.map((item, i) => (
              <div key={i} className="menu-list-item">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
                <span className="price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-category">
          <h2>Pasta</h2>
          <div className="menu-list">
            {pastas.map((item, i) => (
              <div key={i} className="menu-list-item">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
                <span className="price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-category">
          <h2>Main Courses</h2>
          <div className="menu-list">
            {mains.map((item, i) => (
              <div key={i} className="menu-list-item">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
                <span className="price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TemplateLayout>
  );
}
