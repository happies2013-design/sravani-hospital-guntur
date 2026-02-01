# 🐳 Dokploy Deployment Guide - Sravani Hospital Guntur

## 🏥 Hospital Information
**Name:** Sravani Multi-Specialty Hospital  
**Location:** Guntur, Andhra Pradesh  
**Address:** Old Bank Road, Kotthapet, Guntur 522001  

---

## 📦 What's Included

✅ **Dockerfile** - Multi-stage build with Nginx  
✅ **docker-compose.yml** - Complete orchestration  
✅ **.dockerignore** - Optimized build context  
✅ **nginx.conf** - Production-ready configuration  

---

## 🚀 Deployment Methods

### **Method 1: GitHub + Dokploy (Recommended)**

#### **Step 1: Create GitHub Repository**
```bash
# Go to https://github.com/new
# Create repository: sravani-hospital-guntur
# Then push code:

git remote add origin https://github.com/YOUR_ACTUAL_USERNAME/sravani-hospital-guntur.git
git push -u origin master
```

#### **Step 2: Deploy on Dokploy**

1. **Login to Dokploy Dashboard**
   - Go to your Dokploy URL (e.g., `https://dokploy.yourdomain.com`)
   - Login with your credentials

2. **Create New Project**
   - Click "New Project"
   - Name: `sravani-hospital`
   - Description: "Enterprise Hospital Management System"

3. **Add Application**
   - Click "Add Application"
   - Type: **Docker Compose**
   - Source: **GitHub**
   - Repository: Select your `sravani-hospital-guntur` repo
   - Branch: `master`
   - Docker Compose File: `docker-compose.yml`

4. **Environment Variables**
   Add these in Dokploy:
   ```
   VITE_BASE44_APP_ID=your_app_id
   VITE_BASE44_FUNCTIONS_VERSION=your_version
   VITE_BASE44_APP_BASE_URL=your_base_url
   VITE_APP_NAME=Sravani Multi-Specialty Hospital
   VITE_LOCATION=Guntur, Andhra Pradesh
   VITE_ADDRESS=Old Bank Road, Kotthapet, Guntur 522001
   VITE_PHONE=0863-2233644
   VITE_EMERGENCY=0863-2352354
   ```

5. **Domain Configuration**
   - Add domain: `sravanihospital.com` (or your domain)
   - Enable SSL (Let's Encrypt)
   - Click "Deploy"

6. **Deploy!**
   - Click "Deploy" button
   - Wait for build to complete
   - Your app will be live!

---

### **Method 2: Direct Docker Build & Deploy**

#### **Step 1: Build Docker Image**
```bash
# Build the image
docker build -t sravani-hospital:latest .

# Test locally
docker run -p 80:80 sravani-hospital:latest

# Visit http://localhost to test
```

#### **Step 2: Push to Docker Registry**
```bash
# Tag for Docker Hub
docker tag sravani-hospital:latest YOUR_DOCKERHUB_USERNAME/sravani-hospital:latest

# Login to Docker Hub
docker login

# Push image
docker push YOUR_DOCKERHUB_USERNAME/sravani-hospital:latest
```

#### **Step 3: Deploy on Dokploy**
1. In Dokploy, create new application
2. Type: **Docker Image**
3. Image: `YOUR_DOCKERHUB_USERNAME/sravani-hospital:latest`
4. Add environment variables
5. Configure domain
6. Deploy!

---

### **Method 3: Docker Compose Local Deploy**

```bash
# Create .env file
cat > .env << EOF
VITE_BASE44_APP_ID=your_app_id
VITE_BASE44_FUNCTIONS_VERSION=your_version
VITE_BASE44_APP_BASE_URL=your_base_url
EOF

# Build and run
docker-compose up -d

# Check logs
docker-compose logs -f

# Stop
docker-compose down
```

---

## 🔧 Configuration Files

### **1. Dockerfile**
- Multi-stage build (Node.js + Nginx)
- Optimized for production
- Health checks included
- Minimal image size

### **2. docker-compose.yml**
- Port mapping (80, 443)
- Environment variables
- Restart policy
- Health checks
- Traefik labels for SSL

### **3. nginx.conf**
- SPA routing support
- Gzip compression
- Static asset caching
- Security headers

---

## 🌐 Domain Configuration

### **In Dokploy:**
1. Go to your application
2. Click "Domains"
3. Add domain: `sravanihospital.com`
4. Add www redirect: `www.sravanihospital.com`
5. Enable SSL (Let's Encrypt)
6. Save

### **DNS Settings:**
Point your domain to Dokploy server:
```
Type: A
Name: @
Value: YOUR_DOKPLOY_SERVER_IP

Type: A
Name: www
Value: YOUR_DOKPLOY_SERVER_IP
```

---

## 📊 Build Information

### **Docker Image:**
- **Base:** node:20-alpine + nginx:alpine
- **Size:** ~50MB (optimized)
- **Layers:** Multi-stage (2 stages)
- **Port:** 80 (HTTP), 443 (HTTPS via Traefik)

### **Build Time:**
- First build: ~5-10 minutes
- Subsequent builds: ~2-3 minutes (cached)

---

## 🔍 Monitoring & Logs

### **View Logs:**
```bash
# Docker Compose
docker-compose logs -f

# Docker
docker logs -f sravani-hospital-guntur

# In Dokploy
# Go to Application → Logs tab
```

### **Health Check:**
```bash
# Check container health
docker ps

# Manual health check
curl http://localhost/

# Or visit in browser
http://your-domain.com
```

---

## 🚨 Troubleshooting

### **Build Fails:**
```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker build --no-cache -t sravani-hospital:latest .
```

### **Container Won't Start:**
```bash
# Check logs
docker logs sravani-hospital-guntur

# Check if port is in use
lsof -i :80

# Restart container
docker restart sravani-hospital-guntur
```

### **Environment Variables Not Working:**
- Ensure they're prefixed with `VITE_`
- Rebuild after adding new variables
- Check Dokploy environment settings

---

## 🔄 CI/CD with Dokploy

### **Automatic Deployment:**
1. Push code to GitHub
2. Dokploy detects changes
3. Automatically rebuilds
4. Deploys new version
5. Zero downtime!

### **Manual Deployment:**
```bash
# In Dokploy dashboard
1. Go to your application
2. Click "Redeploy"
3. Wait for build
4. Done!
```

---

## 📈 Performance Optimization

### **Already Implemented:**
- ✅ Multi-stage Docker build
- ✅ Nginx gzip compression
- ✅ Static asset caching
- ✅ Minimal image size
- ✅ Health checks

### **Recommended:**
- [ ] CDN for static assets
- [ ] Database caching (Redis)
- [ ] Load balancing
- [ ] Monitoring (Prometheus)

---

## 🔒 Security

### **Included:**
- ✅ Non-root user in container
- ✅ Minimal base image (Alpine)
- ✅ No sensitive data in image
- ✅ Environment variables for secrets
- ✅ SSL via Let's Encrypt

### **Recommended:**
- [ ] Regular security updates
- [ ] Container scanning
- [ ] Firewall rules
- [ ] Rate limiting

---

## 📞 Support

### **Dokploy Issues:**
- Documentation: https://docs.dokploy.com
- GitHub: https://github.com/Dokploy/dokploy

### **Hospital Contact:**
- Phone: 0863-2233644
- Email: sravaniteja2002@gmail.com

---

## ✅ Deployment Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Dokploy project created
- [ ] Environment variables configured
- [ ] Domain added and DNS configured
- [ ] SSL certificate enabled
- [ ] Application deployed
- [ ] Health check passing
- [ ] Logs reviewed
- [ ] Application tested
- [ ] Team notified

---

## 🎯 Quick Commands

```bash
# Build
docker build -t sravani-hospital .

# Run locally
docker run -p 80:80 sravani-hospital

# Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down

# Push to GitHub
git add .
git commit -m "Docker deployment ready"
git push origin master
```

---

## 🌟 Expected URLs

**After Deployment:**
- **Production:** https://sravanihospital.com
- **Dokploy Dashboard:** https://dokploy.yourdomain.com
- **Docker Registry:** hub.docker.com/r/YOUR_USERNAME/sravani-hospital

---

## 📝 Next Steps

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Name: `sravani-hospital-guntur`
   - Push code

2. **Deploy on Dokploy**
   - Connect GitHub repo
   - Configure environment
   - Add domain
   - Deploy!

3. **Configure Domain**
   - Update DNS records
   - Enable SSL
   - Test deployment

4. **Monitor & Maintain**
   - Check logs regularly
   - Monitor performance
   - Update as needed

---

**🎉 Your hospital management system is ready for Docker deployment!**

**Sravani Multi-Specialty Hospital**  
**Guntur, Andhra Pradesh**  
**Excellence in Healthcare Since 2006**

---

## 🚀 Deploy Now!

```bash
# 1. Create GitHub repo at https://github.com/new

# 2. Push code
git remote add origin https://github.com/YOUR_USERNAME/sravani-hospital-guntur.git
git add .
git commit -m "Docker deployment ready"
git push -u origin master

# 3. Deploy on Dokploy
# - Login to Dokploy
# - Create new project
# - Connect GitHub repo
# - Configure & Deploy!
```

**Your containerized hospital system is ready! 🐳**
