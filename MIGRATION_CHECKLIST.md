# Migration Checklist

Follow these steps to complete the migration to Maven structure:

## Current → Maven Structure Migration

### Root Level Files
- [ ] Index page: `index.html` → `src/main/webapp/index.html`
- [ ] Error page: `404.html` → `src/main/webapp/404.html`
- [ ] Keep `README.md` at root (for GitHub)
- [ ] Keep `skills.json` → `src/main/webapp/skills.json`

### Assets Directory
```
assets/
├── css/
│   ├── 404.css       → src/main/webapp/assets/css/404.css
│   └── style.css     → src/main/webapp/assets/css/style.css
├── images/
│   ├── educat/       → src/main/webapp/assets/images/educat/
│   └── profile/      → src/main/webapp/assets/images/profile/
└── js/
    ├── 404.js        → src/main/webapp/assets/js/404.js
    ├── app.js        → src/main/webapp/assets/js/app.js
    ├── particles.min.js → src/main/webapp/assets/js/particles.min.js
    └── script.js     → src/main/webapp/assets/js/script.js
```

### Experience Directory
```
experience/
├── index.html        → src/main/webapp/experience/index.html
├── script.js         → src/main/webapp/experience/script.js
└── style.css         → src/main/webapp/experience/style.css
```

### Projects Directory
```
projects/
├── index.html        → src/main/webapp/projects/index.html
├── projects.json     → src/main/webapp/projects/projects.json
├── script.js         → src/main/webapp/projects/script.js
└── style.css         → src/main/webapp/projects/style.css
```

## Files to Keep at Root
- [x] pom.xml (NEW - Maven configuration)
- [x] .gitignore (UPDATED - Maven entries added)
- [x] README.md (Project description)
- [ ] MAVEN_GUIDE.md (NEW - This guide)
- [ ] MIGRATION_CHECKLIST.md (This file)

## After Migration
1. You can delete the old `assets/`, `experience/`, and `projects/` directories at the root (copies exist in `src/main/webapp/`)
2. Verify all links and paths work correctly
3. Test build: `mvn clean package`
4. Verify the WAR file: `ls target/portfolio-website.war`

## Building and Testing

### Build locally
```bash
mvn clean package
```

### Verify WAR contents
```bash
# Windows PowerShell
jar tf target/portfolio-website.war

# Or with Maven
mvn help:describe -Dplugin=war
```

### Deployment
- **Local testing**: Extract WAR and serve with local server
- **Docker**: Use with tomcat Docker image
- **Netlify**: Continue existing deployment (src/main/webapp is your root)
- **AWS S3**: Extract WAR contents and upload to bucket
