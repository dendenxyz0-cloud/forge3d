<?php
$navItems = ['Product', 'Workflow', 'Models', 'Pricing'];
$stats = [
  ['label' => 'Models generated', 'value' => '1.2M+'],
  ['label' => 'Avg. time to prototype', 'value' => '4 min'],
  ['label' => 'Live team collaboration', 'value' => '24/7']
];
$features = [
  ['icon' => '✦', 'title' => 'Prompt to 3D in seconds', 'text' => 'Turn written ideas, sketches, and references into polished 3D assets with precise style and production controls.'],
  ['icon' => '⌁', 'title' => 'Edit with precision', 'text' => 'Refine silhouettes, materials, and topology without breaking your creative workflow.'],
  ['icon' => '◌', 'title' => 'Animate everything', 'text' => 'Generate motion for product shots, characters, props, and cinematic presentation scenes.'],
  ['icon' => '⇢', 'title' => 'Ship across formats', 'text' => 'Export GLB, OBJ, FBX, USD, and web-ready variations for games, commerce, and pitch decks.']
];
$steps = [
  'Describe your asset, style, and use case.',
  'Generate multiple variations and compare results.',
  'Refine materials, lighting, and motion in one place.',
  'Export and ship to your real-world pipeline.'
];
$assetTypes = ['Game props', 'Product mockups', 'Character concepts', 'Architecture forms', 'Packaging visuals', 'Social motion ads'];
$plans = [
  ['name' => 'Starter', 'price' => '$19', 'description' => 'For solo creators shipping prototypes and early concepts.', 'features' => ['200 credits / month', 'Fast text-to-3D', 'Basic motion tools', 'Standard exports'], 'featured' => false],
  ['name' => 'Studio', 'price' => '$79', 'description' => 'For teams designing polished assets and iterating quickly.', 'features' => ['Unlimited projects', 'Style presets', 'Advanced animation', 'Priority processing'], 'featured' => true],
  ['name' => 'Enterprise', 'price' => 'Custom', 'description' => 'For large teams with custom pipelines and governance.', 'features' => ['Private deployment', 'Team workspaces', 'API access', 'Dedicated onboarding'], 'featured' => false]
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Forge3D creates production-ready 3D models, textures, and animation with AI-powered workflows." />
  <title>Forge3D | AI 3D Studio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/style.css" />
</head>
<body>
  <div class="page-shell"></div>

  <header class="topbar">
    <div class="container nav">
      <div class="brand-wrap">
        <div class="brand-mark">F</div>
        <span class="brand-name">Forge3D</span>
      </div>

      <nav class="nav-links" aria-label="Main navigation">
        <?php foreach ($navItems as $item): ?>
          <a href="#"><?php echo htmlspecialchars($item); ?></a>
        <?php endforeach; ?>
      </nav>

      <div class="nav-actions">
        <button class="btn btn-ghost">Log in</button>
        <button class="btn btn-primary">Start creating</button>
      </div>
    </div>
  </header>

  <main>
    <section class="hero container">
      <div class="hero-copy">
        <div class="eyebrow">The next generation of 3D creation</div>
        <h1>Design, generate, and animate 3D with AI.</h1>
        <p>
          Forge3D turns prompts, concepts, and references into production-ready 3D models and motion.
          Built for real creative work, not just generic asset generation.
        </p>

        <div class="cta-row">
          <button class="btn btn-primary large">Start free</button>
          <button class="btn btn-secondary large">Book a demo</button>
        </div>

        <div class="stats-grid">
          <?php foreach ($stats as $stat): ?>
            <div class="stat-card">
              <div class="stat-value"><?php echo htmlspecialchars($stat['value']); ?></div>
              <div class="stat-label"><?php echo htmlspecialchars($stat['label']); ?></div>
            </div>
          <?php endforeach; ?>
        </div>
      </div>

      <div class="hero-visual">
        <div class="visual-panel">
          <div class="window-bar">
            <span></span><span></span><span></span>
          </div>

          <div class="model-stage">
            <div class="orb orb-one"></div>
            <div class="orb orb-two"></div>
            <div class="orb orb-three"></div>

            <div class="prompt-box">
              <div class="prompt-topline">
                <span>Prompt</span>
                <span class="tag">AI variant 03</span>
              </div>
              <p>“Futuristic drone concept, cinematic lighting, matte alloy, clean topology.”</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features container">
      <div class="section-header center">
        <p class="section-kicker">Built for design teams</p>
        <h2>From concept to production-ready asset.</h2>
      </div>

      <div class="feature-grid">
        <?php foreach ($features as $feature): ?>
          <article class="feature-card">
            <div class="feature-icon"><?php echo htmlspecialchars($feature['icon']); ?></div>
            <h3><?php echo htmlspecialchars($feature['title']); ?></h3>
            <p><?php echo htmlspecialchars($feature['text']); ?></p>
          </article>
        <?php endforeach; ?>
      </div>
    </section>

    <section class="workflow container">
      <div class="workflow-inner">
        <div class="workflow-copy">
          <p class="section-kicker">Workflow</p>
          <h3>A pipeline that actually fits creative work.</h3>
        </div>

        <div class="steps">
          <?php foreach ($steps as $index => $step): ?>
            <div class="step-item">
              <div class="step-no"><?php echo $index + 1; ?></div>
              <p><?php echo htmlspecialchars($step); ?></p>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </section>

    <section class="use-cases container">
      <div class="section-header">
        <p class="section-kicker">Use cases</p>
        <h2>Built for every kind of visual creator.</h2>
      </div>

      <div class="case-grid">
        <?php foreach ($assetTypes as $index => $asset): ?>
          <div class="case-card case-<?php echo ($index % 3) + 1; ?>">
            <div class="case-visual">
              <div class="case-shape"></div>
            </div>
            <span><?php echo htmlspecialchars($asset); ?></span>
          </div>
        <?php endforeach; ?>
      </div>
    </section>

    <section class="pricing container">
      <div class="section-header center">
        <p class="section-kicker">Pricing</p>
        <h2>Simple pricing that scales with your teams.</h2>
      </div>

      <div class="pricing-grid">
        <?php foreach ($plans as $plan): ?>
          <div class="pricing-card <?php echo $plan['featured'] ? 'featured' : ''; ?>">
            <div class="plan-head">
              <h3><?php echo htmlspecialchars($plan['name']); ?></h3>
              <?php if ($plan['featured']): ?>
                <span class="pill">Popular</span>
              <?php endif; ?>
            </div>

            <div class="plan-price">
              <span class="amount"><?php echo htmlspecialchars($plan['price']); ?></span>
              <?php if ($plan['price'] !== 'Custom'): ?>
                <span class="period">/ month</span>
              <?php endif; ?>
            </div>

            <p><?php echo htmlspecialchars($plan['description']); ?></p>

            <ul>
              <?php foreach ($plan['features'] as $feature): ?>
                <li><?php echo htmlspecialchars($feature); ?></li>
              <?php endforeach; ?>
            </ul>

            <button class="btn btn-secondary full-width"><?php echo $plan['price'] === 'Custom' ? 'Talk to sales' : 'Get started'; ?></button>
          </div>
        <?php endforeach; ?>
      </div>
    </section>

    <section class="cta-block container">
      <div class="cta-panel">
        <p class="section-kicker">Ready to ship faster?</p>
        <h2>Launch your next 3D concept in minutes.</h2>
        <div class="cta-row center-row">
          <button class="btn btn-primary">Start free trial</button>
          <button class="btn btn-secondary alt">Talk to sales</button>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <div class="brand-mark small">F</div>
        <span>Forge3D</span>
      </div>

      <div class="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </footer>
</body>
</html>
