import React, { useState, useContext } from 'react';
import AnimatedElement from '../components/AnimatedElement';
import { SiteContentContext } from '../App';

const Projects = () => {
  const siteContent = useContext(SiteContentContext);
  // Buttons
  const projectButtons = siteContent?.projects?.buttons || [
    { FieldValue: 'Tümü', FilterValue: 'all' },
    { FieldValue: 'CRM', FilterValue: 'crm' },
    { FieldValue: 'Davetiye', FilterValue: 'invitation' }
  ];
  // Project cards
  const projectContents = siteContent?.projects?.contents || [];
  // Dynamically group project cards by _1, _2, ...
  const projectGroups = [];
  const projectIndexes = Array.from(new Set(
    projectContents
      .filter(f => f.FieldName.match(/^PROJECTS_EXAMPLE_\d+$/))
      .map(f => f.FieldName.match(/^PROJECTS_EXAMPLE_(\d+)$/)?.[1])
      .filter(Boolean)
  ));
  projectIndexes.forEach((idx) => {
    const header = projectContents.find(f => f.FieldName === `PROJECTS_EXAMPLE_${idx}` && f.FieldCode === 'HEADER')?.FieldValue;
    const content = projectContents.find(f => f.FieldName === `PROJECTS_EXAMPLE_${idx}` && f.FieldCode === 'CONTENT')?.FieldValue;
    const filterValue = projectContents.find(f => f.FieldName === `PROJECTS_EXAMPLE_${idx}` && f.FieldCode === 'HEADER')?.FilterValue?.toLowerCase() || '';
    if (header && content) {
      projectGroups.push({ id: idx, name: header, description: content, category: filterValue });
    }
  });
  // Fallback if API not loaded
  const fallbackProjects = [
    { id: 1, name: 'Müşteri Takip Sistemi', category: 'crm', description: 'Küçük işletmeler için müşteri yönetim sistemi' },
    { id: 2, name: 'Düğün Davetiyesi', category: 'invitation', description: 'Özelleştirilebilir dijital düğün davetiyesi' },
    { id: 4, name: 'Doğum Günü Davetiyesi', category: 'invitation', description: 'Etkileşimli doğum günü davetiyesi şablonu' }
  ];
  const [filter, setFilter] = useState('all');
  const filteredProjects = (projectGroups.length ? projectGroups : fallbackProjects).filter(project => {
    if (filter === 'all') return true;
    return project.category.includes(filter);
  });
  // Determine the appropriate grid class based on number of filtered projects
  let gridClass = 'projects-grid';
  if (filteredProjects.length <= 2) {
    gridClass += ' few-cards';
    if (filteredProjects.length === 1) {
      gridClass += ' single-card';
    }
  }
  // Dijital Davetiye Örneği (products)
  const products = siteContent?.products || [];
  const davetiyeHeader = products.find(p => p.FieldCode === 'HEADER')?.FieldValue || 'Merve & Nur Düğün Davetiyesi';
  const davetiyeContent = products.find(p => p.FieldCode === 'CONTENT')?.FieldValue || 'Gerçek müşterilerimizden birine ait web davetiyemizi inceleyin.';
  const davetiyeButton = products.find(p => p.FieldCode === 'BUTTON')?.FieldValue || 'Davetiyeyi Görüntüle';
  // Dynamically group product cards by _1, _2, ...
  const productGroups = [];
  const productIndexes = Array.from(new Set(
    products
      .filter(f => f.FieldName.match(/^PRODUCTS_CARD_\d+$/))
      .map(f => f.FieldName.match(/^PRODUCTS_CARD_(\d+)$/)?.[1])
      .filter(Boolean)
  ));
  productIndexes.forEach((idx) => {
    const header = products.find(f => f.FieldName === `PRODUCTS_CARD_${idx}` && f.FieldCode === 'HEADER')?.FieldValue;
    const content = products.find(f => f.FieldName === `PRODUCTS_CARD_${idx}` && f.FieldCode === 'CONTENT')?.FieldValue;
    const buttonName = products.find(f => f.FieldName === `PRODUCTS_CARD_${idx}` && f.FieldCode === 'BUTTON_NAME')?.FieldValue;
    const buttonHref = products.find(f => f.FieldName === `PRODUCTS_CARD_${idx}` && f.FieldCode === 'BUTTON_HREF')?.FieldValue;
    if (header && content && buttonName && buttonHref) {
      productGroups.push({ header, content, buttonName, buttonHref });
    }
  });
  // Section titles
  const projectsHeader = siteContent?.projects?.buttons?.find(f => f.FieldArea === 'PROJECTS' && f.FieldName === 'HEADER')?.FieldValue
    || siteContent?.projects?.contents?.find(f => f.FieldArea === 'PROJECTS' && f.FieldName === 'HEADER')?.FieldValue
    || 'PROJELERİMİZ';
  const productsHeader = products.find(f => f.FieldArea === 'PRODUCTS' && f.FieldName === 'HEADER')?.FieldValue || 'Dijital Davetiye Örneği';

  return (
    <div className="projects-page">
      <AnimatedElement>
        <h1 className="section-title">{projectsHeader}</h1>
      </AnimatedElement>
      
      <AnimatedElement delay={0.2}>
        <div className="filter-buttons">
          {projectButtons.map(btn => (
            <button
              key={btn.FieldValue}
              className={`filter-btn ${filter === (btn.FilterValue?.toLowerCase() || 'all') ? 'active' : ''}`}
              onClick={() => setFilter((btn.FilterValue || 'all').toLowerCase())}
            >
              {btn.FieldValue.replace(/\*\*/g, '')}
            </button>
          ))}
        </div>
      </AnimatedElement>
      
      <div className={gridClass}>
        {filteredProjects.map((project, index) => (
          <AnimatedElement key={project.id} delay={0.3 + (index * 0.1)}>
            <div className="project-card">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </AnimatedElement>
        ))}
      </div>

      {/* Digital Invitation Example Section */}
      <AnimatedElement delay={0.6}>
        <section className="digital-invitation-example">
          <h2 className="subsection-title">{productsHeader}</h2>
          <div className="products-grid">
            {productGroups.length > 0 ? (
              productGroups.map((product, i) => (
                <div key={i} className="project-card" style={{alignItems: 'center', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 220}}>
                  <h3 className="project-title" style={{marginBottom: 8}}>{product.header}</h3>
                  <p className="project-description" style={{marginBottom: 12}}>{product.content}</p>
                  <a 
                    href={product.buttonHref}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="view-invitation-btn"
                    style={{marginTop: 'auto'}}
                  >
                    {product.buttonName}
                  </a>
                </div>
              ))
            ) : (
              <div className="project-card" style={{alignItems: 'center', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 220}}>
                <h3 className="project-title" style={{marginBottom: 8}}>{davetiyeHeader}</h3>
                <p className="project-description" style={{marginBottom: 12}}>{davetiyeContent}</p>
                <a 
                  href="https://mervenurkomur.eyyupsert.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="view-invitation-btn"
                  style={{marginTop: 'auto'}}
                >
                  {davetiyeButton}
                </a>
              </div>
            )}
          </div>
        </section>
      </AnimatedElement>
    </div>
  );
};

export default Projects; 