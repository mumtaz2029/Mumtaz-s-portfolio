# Mumtaz Jahan Portfolio

Personal portfolio website for Mumtaz Jahan, focused on DevOps, cloud, automation, and project-based learning.

## Live Website

- Netlify: [mumtaz-portfolio.netlify.app](https://mumtaz-portfolio.netlify.app)

## About

This portfolio highlights:

- DevOps and cloud-focused profile
- Skills across Azure, AWS, Docker, Kubernetes, Linux, Git, and CI/CD
- Education details
- Real project highlights
- Experience and contact information

## Featured Projects

### 1. CI/CD Pipeline for Java Application

Designed and implemented a CI/CD pipeline to automate the build and deployment process of a Java web application.

Tech used:

- GitHub
- Jenkins
- Docker
- Maven
- Java
- Linux

GitHub: [project-1](https://github.com/mumtaz2029/project-1.git)

### 2. Dockerized Web Application Deployment

Containerized a web application using Docker to ensure consistent deployment across environments.

Tech used:

- Docker
- Linux
- Java
- HTML
- Git

GitHub: [project-2](https://github.com/mumtaz2029/project-2.git)

### 3. Cloud Infrastructure Deployment on Azure

Provisioned and configured cloud infrastructure using Microsoft Azure services for scalable application deployment.

Tech used:

- Microsoft Azure
- Virtual Machines
- Linux
- Git
- Networking
- Cloud Infrastructure

GitHub: [project-3](https://github.com/mumtaz2029/project-3.git)

## Tech Stack

- HTML
- CSS
- JavaScript
- jQuery
- Particle.js
- Typed.js
- ScrollReveal
- Maven (Build Tool)
- Apache Tomcat (Deployment Server)

## Project Structure

This project has been converted to a Maven-based structure for better build management and deployment:

```
portfolio-website/
├── pom.xml                          # Maven configuration
├── src/
│   └── main/
│       └── webapp/                  # Web application root
│           ├── index.html           # Main portfolio page
│           ├── 404.html             # Error page
│           ├── skills.json          # Skills data
│           ├── assets/              # Static assets (CSS, JS, Images)
│           ├── experience/          # Experience section
│           └── projects/            # Projects section
├── target/                          # Build output (generated)
└── README.md
```

## Build and Deployment

### Local Development

1. **Prerequisites:**
   - Java 21 or higher
   - Maven 3.6+
   - Apache Tomcat 9+

2. **Build the project:**
   ```bash
   mvn clean package
   ```

3. **Deploy to Tomcat:**
   - Copy `target/portfolio-website.war` to Tomcat's `webapps/` directory
   - Access at: `http://localhost:8080/portfolio-website/`

### CI/CD Pipeline

The project includes automated CI/CD pipelines for continuous integration and deployment:

#### GitHub Actions (Recommended)

- **Build Pipeline:** Automatically builds and tests on every push to main branch
- **Artifact Generation:** Creates deployable WAR file
- **Quality Gates:** Runs static analysis and security scans

#### Jenkins Pipeline

- **Automated Deployment:** Deploys to staging/production Tomcat servers
- **Environment Management:** Supports multiple deployment environments
- **Rollback Capability:** Quick rollback to previous versions

#### Pipeline Features

- **Maven Build:** Compiles and packages the web application
- **Tomcat Deployment:** Automated deployment to Tomcat servers
- **Health Checks:** Post-deployment verification
- **Notifications:** Slack/email notifications on build status

### Deployment Environments

- **Development:** Local Tomcat instance
- **Staging:** Automated deployment from feature branches
- **Production:** Manual approval required for main branch deployments

## Deployment Demo

Watch the portfolio project deployed on Ec2 Instance:



https://github.com/user-attachments/assets/66d5d3cc-da1b-4e8b-9ce8-6e1d91e31f3f






## Recent Updates

- **Maven Migration:** Converted static website to Maven project structure for better build management
- **CI/CD Integration:** Implemented automated pipelines for continuous deployment
- **Tomcat Deployment:** Added support for enterprise-grade web server deployment
- **WAR Packaging:** Optimized for containerized and traditional server deployments

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `mvn clean package` to test
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Email: [mumtazjahan2029@gmail.com](mailto:mumtazjahan2029@gmail.com)
- GitHub: [mumtaz2029](https://github.com/mumtaz2029)
- LinkedIn: [momtaz-j-1669031b1](https://www.linkedin.com/in/momtaz-j-1669031b1)
- YouTube: [MJ Tech](https://www.youtube.com/@MJtech1916)
