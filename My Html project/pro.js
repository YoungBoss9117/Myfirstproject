document.addEventListener('DOMContentLoaded', () => {
  const createEl = (tag, attrs = {}, innerHTML = '') => {
    const el = document.createElement(tag);
    for (const key in attrs) {
      if (key === 'class') el.className = attrs[key];
      else if (key === 'src' || key === 'href' || key === 'alt' || key === 'type' || key === 'required') el.setAttribute(key, attrs[key]);
      else el[key] = attrs[key];
    }
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
  };

  const body = document.body;

  // Header
  const header = createEl('header');
  const headerContainer = createEl('div', { class: 'container' });
  const h1 = createEl('h1', {}, 'T&J Barbing Salon');
  const nav = createEl('nav');
  const ul = createEl('ul');
  ['Services', 'About Us', 'Gallery', 'Contact'].forEach(section => {
    const li = createEl('li');
    const a = createEl('a', { href: `#${section.toLowerCase().replace(/\s+/g, '')}` }, section);
    li.appendChild(a);
    ul.appendChild(li);
  });
  nav.appendChild(ul);
  headerContainer.append(h1, nav);
  header.appendChild(headerContainer);
  body.appendChild(header);

  // Hero Section
  const hero = createEl('section', { class: 'hero' });
  const heroContainer = createEl('div', { class: 'container' });
  heroContainer.append(
    createEl('h2', {}, 'Your Style, Our Passion'),
    createEl('p', {}, 'Experience the best haircuts and grooming services in town.'),
    createEl('a', { href: '#contact', class: 'btn' }, 'Book an Appointment')
  );
  hero.appendChild(heroContainer);
  body.appendChild(hero);

  // Services Section
  const services = createEl('section', { id: 'services', class: 'services' });
  const servicesContainer = createEl('div', { class: 'container' });
  servicesContainer.appendChild(createEl('h2', {}, 'Our Services Are:'));

  const service1 = createEl('div', { class: 'service' });
  service1.appendChild(createEl('p', {}, 'Professional haircuts for men, women, and children.'));
  servicesContainer.appendChild(service1);

  const service2 = createEl('div', { class: 'service' });
  service2.appendChild(createEl('h3', {}, 'Shaves'));
  service2.appendChild(createEl('p', {}, 'Classic and modern shaving techniques for a clean look.'));
  service2.appendChild(createEl('img', { src: 'ima.jpg', alt: 'Shaving' }));
  servicesContainer.appendChild(service2);

  const service3 = createEl('div', { class: 'service' });
  service3.appendChild(createEl('h3', {}, 'Styling'));
  service3.appendChild(createEl('p', {}, 'Expert styling to suit your personality and preferences.'));
  service3.appendChild(createEl('img', { src: 'styling.jpg', alt: 'Expert Styling' }));
  servicesContainer.appendChild(service3);

  services.appendChild(servicesContainer);
  body.appendChild(services);

  // Gallery Section
  const gallery = createEl('section', { class: 'gallery' });
  const galleryContainer = createEl('div', { class: 'container' });
  galleryContainer.appendChild(createEl('h2', {}, 'Popular Hairstyles'));

  const galleryGrid = createEl('div', { class: 'gallery-grid' });
  const styles = [
    ['fade cut.jpg', 'Fade Cut'],
    ['afro.jpg', 'Afro'],
    ['buzz cut.jpg', 'Buzz Cut'],
    ['temp.jpg', 'Temp Fade'],
    ['dreadlock.jpg', 'Dreadlocks'],
    ['low cut 2.jpg', 'Low Cut']
  ];

  styles.forEach(([img, title]) => {
    const card = createEl('div', { class: 'style-card' });
    card.appendChild(createEl('img', { src: img, alt: title }));
    card.appendChild(createEl('h3', {}, title));
    galleryGrid.appendChild(card);
  });

  galleryContainer.appendChild(galleryGrid);
  gallery.appendChild(galleryContainer);
  body.appendChild(gallery);

  // About Section
  const about = createEl('section', { id: 'about', class: 'about' });
  const aboutContainer = createEl('div', { class: 'container' });
  aboutContainer.appendChild(createEl('h2', {}, 'About Us'));
  aboutContainer.appendChild(createEl('p', {}, 'We are a team of experienced barbers dedicated to providing top-notch grooming services. Our salon offers a relaxing atmosphere where you can unwind while we take care of your grooming needs.'));
  about.appendChild(aboutContainer);
  body.appendChild(about);

  // Gallery 2
  const gallery2 = createEl('section', { id: 'gallery', class: 'gallery' });
  const gallery2Container = createEl('div', { class: 'container' });
  gallery2Container.appendChild(createEl('h2', {}, 'Gallery'));

  const gallery2Grid = createEl('div', { class: 'gallery-grid' });
  ['equip.jpg', 'equip1.jpg', 'cv.jpg'].forEach((img, i) => {
    const item = createEl('div', { class: 'gallery-item' });
    item.appendChild(createEl('img', { src: img, alt: `Equipment ${i + 1}` }));
    gallery2Grid.appendChild(item);
  });

  gallery2Container.appendChild(gallery2Grid);
  gallery2.appendChild(gallery2Container);
  body.appendChild(gallery2);

  // Contact Section
  const contact = createEl('section', { id: 'contact', class: 'contact' });
  const contactContainer = createEl('div', { class: 'container' });
  contactContainer.appendChild(createEl('h2', {}, 'Contact Us'));

  const form = createEl('form');
  form.appendChild(createEl('p', {}, 'Username'));
  form.appendChild(createEl('input', { type: 'text', required: true }));
  form.appendChild(createEl('p', {}, 'Email Address'));
  form.appendChild(createEl('input', { type: 'email', required: true }));
  form.appendChild(createEl('p', {}, 'Message Request'));
  form.appendChild(createEl('textarea', { required: true }));
  form.appendChild(createEl('button', { type: 'submit', class: 'btn' }, 'Send Message'));
  contactContainer.appendChild(form);
  contact.appendChild(contactContainer);
  body.appendChild(contact);

  // Review Section
  const review = createEl('section', { class: 'review-section' });
  const reviewContainer = createEl('div', { class: 'container' });
  reviewContainer.appendChild(createEl('h2', { class: 'section-title' }, 'What Our Clients Say'));

  const reviews = createEl('div', { class: 'reviews' });

  const reviewData = [
    ['James O.', '★★★★★', 'June 25, 2025', 'Absolutely the best fade I\'ve ever gotten! The staff is professional, and the ambiance is clean and modern. Highly recommended.'],
    ['Chinwe N.', '★★★★☆', 'June 20, 2025', 'I love how friendly the barbers are. My son got a great haircut and he won\'t stop talking about it!'],
    ['Tunde A.', '★★★★★', 'June 15, 2025', 'Excellent service, minimal wait time, and they really listen to what you want. I’ll definitely be back.']
  ];

  reviewData.forEach(([name, stars, date, text]) => {
    const card = createEl('div', { class: 'review-card' });
    const header = createEl('div', { class: 'review-header' });
    header.appendChild(createEl('div', { class: 'name' }, name));
    header.appendChild(createEl('div', { class: 'stars' }, stars));
    card.appendChild(header);
    card.appendChild(createEl('div', { class: 'date' }, date));
    card.appendChild(createEl('p', { class: 'review-text' }, text));
    reviews.appendChild(card);
  });

  reviewContainer.appendChild(reviews);
  review.appendChild(reviewContainer);
  body.appendChild(review);

  // Footer
  const footer = createEl('footer');
  const footerContainer = createEl('div', { class: 'container' });
  footerContainer.appendChild(createEl('p', {}, '© 2025 T&J Barbing Salon. All Rights Reserved.'));
  footer.appendChild(footerContainer);
  body.appendChild(footer);
});
