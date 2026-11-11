import React, { useState, useEffect } from 'react';
import GlobeViewer from './components/GlobeViewer';
import { MONUMENTS, UI_TRANSLATIONS } from './data/monuments';
import './App.css';

export default function App() {
  const [lang, setLang] = useState('fr'); // 'fr' or 'en'
  const [selectedId, setSelectedId] = useState(MONUMENTS[0].id);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStage, setCurrentStage] = useState('');
  const [isAutoOrbiting, setIsAutoOrbiting] = useState(false);
  const [mapLayer, setMapLayer] = useState('satellite'); // 'satellite' | 'hybrid' | 'street'
  const [viewMode, setViewMode] = useState('globe'); // 'globe' | 'gallery' | 'interior' | 'landscape'
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const t = UI_TRANSLATIONS[lang];
  const activeMonument = MONUMENTS.find((m) => m.id === selectedId) || MONUMENTS[0];
  const currentIndex = MONUMENTS.findIndex((m) => m.id === selectedId);

  const gallery = activeMonument.gallery || [
    {
      src: activeMonument.interior?.image,
      title: activeMonument.interior?.title,
      caption: activeMonument.interior?.highlight,
      tag: { fr: 'Intérieur', en: 'Interior' }
    },
    {
      src: activeMonument.landscape?.image,
      title: activeMonument.landscape?.title,
      caption: activeMonument.landscape?.mountains,
      tag: { fr: 'Paysage', en: 'Landscape' }
    }
  ];

  // Reset photo index when monument changes
  useEffect(() => {
    setActivePhotoIdx(0);
  }, [selectedId]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowRight') {
        setActivePhotoIdx((prev) => (prev + 1) % gallery.length);
      } else if (e.key === 'ArrowLeft') {
        setActivePhotoIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, gallery.length]);

  const handleSelectChange = (e) => {
    setSelectedId(e.target.value);
    setViewMode('globe');
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + MONUMENTS.length) % MONUMENTS.length;
    setSelectedId(MONUMENTS[prevIndex].id);
    setViewMode('globe');
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % MONUMENTS.length;
    setSelectedId(MONUMENTS[nextIndex].id);
    setViewMode('globe');
  };

  const activeName = activeMonument.name[lang] || activeMonument.name.fr;
  const activeDepartment = activeMonument.department[lang] || activeMonument.department.fr;
  const activeEra = activeMonument.era[lang] || activeMonument.era.fr;
  const activeDesc = activeMonument.description[lang] || activeMonument.description.fr;
  const activeHistoricalNote = activeMonument.historicalNote[lang] || activeMonument.historicalNote.fr;

  const interiorData = activeMonument.interior;
  const landscapeData = activeMonument.landscape;
  const currentPhoto = gallery[activePhotoIdx] || gallery[0];

  return (
    <div className="app-container">
      {/* 3D Geospatial Globe Canvas */}
      <GlobeViewer
        activeMonument={activeMonument}
        onSelectMonument={(id) => {
          setSelectedId(id);
          setViewMode('globe');
        }}
        isAnimating={isAnimating}
        setIsAnimating={setIsAnimating}
        currentStage={currentStage}
        setCurrentStage={setCurrentStage}
        isAutoOrbiting={isAutoOrbiting}
        setIsAutoOrbiting={setIsAutoOrbiting}
        mapLayer={mapLayer}
        viewMode={viewMode}
        lang={lang}
      />

      {/* Primary HUD Panel - Formal Institutional Layout */}
      <aside className="hud-panel" aria-label="Panneau de contrôle patrimonial">
        <header className="hud-header">
          <div className="header-top-row">
            <span className="institution-eyebrow">{t.institution}</span>
            <div className="lang-switcher" role="group" aria-label="Sélecteur de langue">
              <button
                type="button"
                className={`lang-btn ${lang === 'fr' ? 'active' : ''}`}
                onClick={() => setLang('fr')}
              >
                FR
              </button>
              <span className="lang-sep">|</span>
              <button
                type="button"
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>
          </div>
          <h1>{t.title}</h1>
          <p className="subtitle">{t.subtitle}</p>
        </header>

        {/* Monument Selector & Controls */}
        <section className="control-card">
          <div className="selector-header">
            <label htmlFor="monument-select" className="field-label">
              {t.selectLabel}
            </label>
            <span className="counter-tag">
              {t.counterPrefix} {currentIndex + 1} / {MONUMENTS.length}
            </span>
          </div>

          <div className="dropdown-row">
            <select
              id="monument-select"
              value={selectedId}
              onChange={handleSelectChange}
              disabled={isAnimating}
              className="monument-select"
            >
              {MONUMENTS.map((m, idx) => (
                <option key={m.id} value={m.id}>
                  {idx + 1}. {m.name[lang] || m.name.fr} — {m.city}
                </option>
              ))}
            </select>
          </div>

          <div className="stepper-buttons">
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              className="btn btn-secondary"
              type="button"
            >
              {t.btnPrev}
            </button>
            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="btn btn-secondary"
              type="button"
            >
              {t.btnNext}
            </button>
            <button
              onClick={() => setIsAutoOrbiting((prev) => !prev)}
              disabled={isAnimating}
              className={`btn ${isAutoOrbiting ? 'btn-active' : 'btn-accent'}`}
              type="button"
            >
              {isAutoOrbiting ? t.btnStopOrbit : t.btnOrbit}
            </button>
          </div>

          {/* Perspective View Switcher: Aerial 3D vs Multi-Photo Gallery vs Interior vs Mountains */}
          <div className="view-mode-tabs" role="tablist">
            <button
              type="button"
              className={`view-tab-btn ${viewMode === 'globe' ? 'active' : ''}`}
              onClick={() => setViewMode('globe')}
            >
              {t.viewModeGlobe}
            </button>
            <button
              type="button"
              className={`view-tab-btn ${viewMode === 'gallery' ? 'active' : ''}`}
              onClick={() => setViewMode('gallery')}
            >
              {t.viewModeGallery} ({gallery.length})
            </button>
            <button
              type="button"
              className={`view-tab-btn ${viewMode === 'interior' ? 'active' : ''}`}
              onClick={() => setViewMode('interior')}
            >
              {t.viewModeInterior}
            </button>
            <button
              type="button"
              className={`view-tab-btn ${viewMode === 'landscape' ? 'active' : ''}`}
              onClick={() => setViewMode('landscape')}
            >
              {t.viewModeLandscape}
            </button>
          </div>

          {/* Basemap Switcher (Active in 3D Aerial View) */}
          {viewMode === 'globe' && (
            <div className="layer-switcher-row">
              <span className="layer-label">{t.mapLayerLabel} :</span>
              <div className="layer-btn-group" role="group">
                <button
                  type="button"
                  className={`layer-btn ${mapLayer === 'satellite' ? 'active' : ''}`}
                  onClick={() => setMapLayer('satellite')}
                >
                  {t.layerSatellite}
                </button>
                <button
                  type="button"
                  className={`layer-btn ${mapLayer === 'hybrid' ? 'active' : ''}`}
                  onClick={() => setMapLayer('hybrid')}
                >
                  {t.layerHybrid}
                </button>
                <button
                  type="button"
                  className={`layer-btn ${mapLayer === 'street' ? 'active' : ''}`}
                  onClick={() => setMapLayer('street')}
                >
                  {t.layerStreet}
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Dynamic Card Content Based on View Mode */}
        {viewMode === 'gallery' ? (
          /* Dedicated Multi-Photo Gallery Mode */
          <article className="monument-card gallery-mode">
            <div className="card-top">
              <span className="section-pill">{t.viewModeGallery.toUpperCase()}</span>
              <span className="department-label">{activeMonument.city}</span>
            </div>

            <h2 className="monument-title">{activeName}</h2>
            <p className="gallery-section-sub">{t.gallerySub}</p>

            {/* Featured Large Photo */}
            <div
              className="gallery-feature-frame"
              onClick={() => setLightboxOpen(true)}
              title={t.lightboxZoom}
            >
              <img
                src={currentPhoto.src}
                alt={currentPhoto.title[lang] || currentPhoto.title.fr}
                className="gallery-feature-img"
              />
              <span className="photo-tag-pill">
                {currentPhoto.tag ? currentPhoto.tag[lang] || currentPhoto.tag.fr : 'Vue'}
              </span>
              <span className="photo-counter-badge">
                {activePhotoIdx + 1} / {gallery.length}
              </span>
              <div className="expand-overlay-hint">
                <span>⤢ {t.lightboxZoom}</span>
              </div>
            </div>

            {/* Caption & Navigation Controls */}
            <div className="gallery-caption-row">
              <div className="caption-text-col">
                <h3 className="photo-caption-title">
                  {currentPhoto.title[lang] || currentPhoto.title.fr}
                </h3>
                <p className="photo-caption-desc">
                  {currentPhoto.caption[lang] || currentPhoto.caption.fr}
                </p>
              </div>
              <div className="gallery-nav-arrows">
                <button
                  type="button"
                  className="gallery-nav-btn"
                  onClick={() =>
                    setActivePhotoIdx((prev) => (prev - 1 + gallery.length) % gallery.length)
                  }
                  title={t.lightboxPrev}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="gallery-nav-btn"
                  onClick={() => setActivePhotoIdx((prev) => (prev + 1) % gallery.length)}
                  title={t.lightboxNext}
                >
                  ›
                </button>
              </div>
            </div>

            {/* Thumbnail Filmstrip */}
            <div className="thumbnail-strip" role="tablist">
              {gallery.map((photo, pIdx) => (
                <button
                  key={photo.src + pIdx}
                  type="button"
                  className={`thumb-btn ${pIdx === activePhotoIdx ? 'active' : ''}`}
                  onClick={() => setActivePhotoIdx(pIdx)}
                  title={photo.title[lang] || photo.title.fr}
                >
                  <img
                    src={photo.src}
                    alt={photo.title[lang] || photo.title.fr}
                    className="strip-thumb-img"
                    loading="lazy"
                  />
                  <span className="thumb-idx-indicator">{pIdx + 1}</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              className="btn btn-secondary return-btn"
              onClick={() => setViewMode('globe')}
            >
              ← {t.viewModeGlobe}
            </button>
          </article>
        ) : viewMode === 'interior' && interiorData ? (
          /* Interior Showcase */
          <article className="monument-card interior-mode">
            <div className="card-top">
              <span className="section-pill">{t.interiorBadge}</span>
              <span className="department-label">{activeMonument.city}</span>
            </div>

            <h2 className="monument-title">{interiorData.title[lang] || interiorData.title.fr}</h2>

            <div
              className="media-frame"
              onClick={() => {
                const intIdx = gallery.findIndex((p) => p.src === interiorData.image);
                if (intIdx !== -1) setActivePhotoIdx(intIdx);
                setLightboxOpen(true);
              }}
              title={t.lightboxZoom}
            >
              <img
                src={interiorData.image}
                alt={interiorData.title[lang] || interiorData.title.fr}
                className="monument-photo"
                loading="lazy"
              />
              <div className="expand-overlay-hint">
                <span>⤢ {t.lightboxZoom}</span>
              </div>
            </div>

            <p className="monument-desc">{interiorData.highlight[lang] || interiorData.highlight.fr}</p>

            <button
              type="button"
              className="btn btn-secondary return-btn"
              onClick={() => setViewMode('globe')}
            >
              ← {t.viewModeGlobe}
            </button>
          </article>
        ) : viewMode === 'landscape' && landscapeData ? (
          /* Mountains & Relief Showcase */
          <article className="monument-card landscape-mode">
            <div className="card-top">
              <span className="section-pill">{t.landscapeBadge}</span>
              <span className="department-label">{activeMonument.city}</span>
            </div>

            <h2 className="monument-title">{landscapeData.title[lang] || landscapeData.title.fr}</h2>

            <div
              className="media-frame"
              onClick={() => {
                const lndIdx = gallery.findIndex((p) => p.src === landscapeData.image);
                if (lndIdx !== -1) setActivePhotoIdx(lndIdx);
                setLightboxOpen(true);
              }}
              title={t.lightboxZoom}
            >
              <img
                src={landscapeData.image}
                alt={landscapeData.title[lang] || landscapeData.title.fr}
                className="monument-photo"
                loading="lazy"
              />
              <div className="expand-overlay-hint">
                <span>⤢ {t.lightboxZoom}</span>
              </div>
            </div>

            <p className="monument-desc">{landscapeData.mountains[lang] || landscapeData.mountains.fr}</p>

            <button
              type="button"
              className="btn btn-secondary return-btn"
              onClick={() => setViewMode('globe')}
            >
              ← {t.viewModeGlobe}
            </button>
          </article>
        ) : (
          /* Default 3D Monograph with Embedded Multi-Photo Filmstrip */
          <article className="monument-card">
            <div className="card-top">
              <span className="city-label">{activeMonument.city.toUpperCase()}</span>
              <span className="department-label">{activeDepartment}</span>
            </div>

            <h2 className="monument-title">{activeName}</h2>

            <div className="meta-line">
              <span className="meta-term">{t.periodLabel} :</span>
              <span className="meta-desc">{activeEra}</span>
            </div>

            <p className="monument-desc">{activeDesc}</p>

            {/* Embedded Multi-Photo Gallery Carousel */}
            <div className="embedded-gallery-box">
              <div
                className="embedded-photo-stage"
                onClick={() => setLightboxOpen(true)}
                title={t.lightboxZoom}
              >
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.title[lang] || currentPhoto.title.fr}
                  className="embedded-main-photo"
                />
                <span className="photo-tag-pill">
                  {currentPhoto.tag ? currentPhoto.tag[lang] || currentPhoto.tag.fr : 'Vue'}
                </span>
                <span className="photo-counter-badge">
                  {activePhotoIdx + 1} / {gallery.length}
                </span>

                <button
                  type="button"
                  className="photo-arrow-btn prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
                  }}
                  title={t.lightboxPrev}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="photo-arrow-btn next"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIdx((prev) => (prev + 1) % gallery.length);
                  }}
                  title={t.lightboxNext}
                >
                  ›
                </button>

                <div className="expand-overlay-hint">
                  <span>⤢ {t.lightboxZoom}</span>
                </div>
              </div>

              {/* Photo Title & Short Context */}
              <div className="embedded-caption-bar">
                <span className="embedded-photo-title">
                  {currentPhoto.title[lang] || currentPhoto.title.fr}
                </span>
                <button
                  type="button"
                  className="view-all-gallery-link"
                  onClick={() => setViewMode('gallery')}
                >
                  {t.viewModeGallery} ({gallery.length}) →
                </button>
              </div>

              {/* 5-Photo Interactive Thumbnail Strip */}
              <div className="thumbnail-strip compact" role="tablist">
                {gallery.map((photo, pIdx) => (
                  <button
                    key={photo.src + pIdx}
                    type="button"
                    className={`thumb-btn ${pIdx === activePhotoIdx ? 'active' : ''}`}
                    onClick={() => setActivePhotoIdx(pIdx)}
                    title={photo.title[lang] || photo.title.fr}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title[lang] || photo.title.fr}
                      className="strip-thumb-img"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="historical-note-box">
              <span className="historical-note-title">{t.historicalContext}</span>
              <p className="historical-note-text">{activeHistoricalNote}</p>
            </div>

            <div className="coords-strip">
              <div className="coord-item">
                <span className="coord-label">{t.latLabel}</span>
                <span className="coord-value">{activeMonument.latitude.toFixed(6)}° N</span>
              </div>
              <div className="coord-item">
                <span className="coord-label">{t.lonLabel}</span>
                <span className="coord-value">
                  {Math.abs(activeMonument.longitude).toFixed(6)}° {activeMonument.longitude < 0 ? 'O' : 'E'}
                </span>
              </div>
              <div className="coord-item">
                <span className="coord-label">{t.altLabel}</span>
                <span className="coord-value">{activeMonument.elevation} m</span>
              </div>
            </div>
          </article>
        )}

        {/* Dynamic Flight Status */}
        <div className="flight-status-indicator">
          <span className={`status-dot ${isAnimating ? 'pulse-animating' : 'idle'}`} />
          <span className="status-label">
            {isAnimating
              ? `${t.flightStatus} ${currentStage}`
              : `${t.stationaryStatus} ${activeName}`}
          </span>
        </div>

        {/* Camera Navigation Guide */}
        <footer className="nav-instructions">
          <div className="nav-header-row">
            <span className="nav-title">{t.navHeader}</span>
          </div>
          <div className="instruction-item">
            <span className="instruction-action">{t.navPan}</span>
            <kbd>{t.keyPan}</kbd>
          </div>
          <div className="instruction-item">
            <span className="instruction-action">{t.navTilt}</span>
            <kbd>{t.keyTilt}</kbd>
          </div>
          <div className="instruction-item">
            <span className="instruction-action">{t.navZoom}</span>
            <kbd>{t.keyZoom}</kbd>
          </div>
        </footer>
      </aside>

      {/* High-Resolution Darkroom Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <header className="lightbox-header">
              <div className="lightbox-meta">
                <span className="lightbox-monument-title">{activeName}</span>
                <span className="lightbox-counter">
                  {t.photoCounter} {activePhotoIdx + 1} {t.of} {gallery.length}
                </span>
              </div>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setLightboxOpen(false)}
                aria-label={t.lightboxClose}
              >
                ✕
              </button>
            </header>

            <div className="lightbox-main-stage">
              <button
                type="button"
                className="lightbox-arrow-btn prev"
                onClick={() =>
                  setActivePhotoIdx((prev) => (prev - 1 + gallery.length) % gallery.length)
                }
                aria-label={t.lightboxPrev}
              >
                ‹
              </button>

              <div className="lightbox-image-wrap">
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.title[lang] || currentPhoto.title.fr}
                  className="lightbox-image"
                />
              </div>

              <button
                type="button"
                className="lightbox-arrow-btn next"
                onClick={() => setActivePhotoIdx((prev) => (prev + 1) % gallery.length)}
                aria-label={t.lightboxNext}
              >
                ›
              </button>
            </div>

            <footer className="lightbox-footer">
              <div className="lightbox-caption-col">
                <div className="lightbox-title-row">
                  <span className="lightbox-tag">
                    {currentPhoto.tag ? currentPhoto.tag[lang] || currentPhoto.tag.fr : 'Photographie'}
                  </span>
                  <h3 className="lightbox-photo-title">
                    {currentPhoto.title[lang] || currentPhoto.title.fr}
                  </h3>
                </div>
                <p className="lightbox-caption-text">
                  {currentPhoto.caption[lang] || currentPhoto.caption.fr}
                </p>
              </div>

              {/* Lightbox Mini Thumb Strip */}
              <div className="lightbox-thumb-strip">
                {gallery.map((photo, pIdx) => (
                  <button
                    key={photo.src + pIdx}
                    type="button"
                    className={`lightbox-thumb ${pIdx === activePhotoIdx ? 'active' : ''}`}
                    onClick={() => setActivePhotoIdx(pIdx)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title[lang] || photo.title.fr}
                      className="lightbox-thumb-img"
                    />
                  </button>
                ))}
              </div>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
