# Campus Resources Web Application

A comprehensive web application that helps students discover and access campus support services across 6 key categories. Built with React frontend and Django backend with MySQL database integration.

## 🌟 Features

- **6 Resource Categories**: Health & Wellness, Career Services, Financial Aid, Time Management, Relationships, and Identity
- **Static Content Display**: Each category contains 2-3 curated resources with descriptions and links
- **Interactive UI**: Expandable cards with smooth animations and hover effects
- **Add New Categories**: Full-featured form to add custom categories with multiple resources to database
- **Database Integration**: New categories stored in MySQL database via Django REST API
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile
- **Clean Architecture**: Organized codebase with reusable components

## 🛠️ Tech Stack

### Frontend
- **React 18** - Component-based UI library
- **TailwindCSS** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript features

### Backend
- **Django 5.2.3** - Python web framework
- **Django REST Framework** - API development
- **MySQL** - Relational database
- **PyMySQL** - MySQL database adapter

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- MySQL Server

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/campus-resources.git
cd campus-resources
```

#### 2. Backend Setup (Django)
```bash
# Create virtual environment
python -m venv django_env
source django_env/bin/activate  # On Windows: django_env\Scripts\activate

# Install dependencies
pip install django djangorestframework django-cors-headers PyMySQL

# Database setup
mysql -u root -p
CREATE DATABASE django_categories;
EXIT;

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Start Django server
python manage.py runserver
```

#### 3. Frontend Setup (React)
```bash
# Install dependencies
npm install

# Start React development server
npm start
```

## 📁 Project Structure

```
campus-resources/
├── myassignment/                 # Django Backend
│   ├── myassignment/            # Project settings
│   │   ├── settings.py         # Database & app configuration
│   │   └── urls.py             # Main URL routing
│   ├── api/                    # Django app
│   │   ├── models.py           # Category model
│   │   ├── views.py            # API endpoints
│   │   └── urls.py             # API URL routing
│   └── manage.py               # Django management script
└── src/                        # React Frontend
    ├── components/             # Reusable components
    │   ├── card.js            # Category card component
    │   └── Images/            # Static images
    ├── App.js                 # Main application component
    └── index.js               # React entry point
```

## 🎯 API Endpoints

### Categories API
- `POST /api/add-category/` - Add new category with resources to database

### Example API Request
```json
{
  "category": "Health & Wellness",
  "image": "https://example.com/health.jpg",
  "description": "Physical and mental health support services",
  "resources": [
    {
      "name": "Campus Health Center",
      "description": "Primary care and preventive health services",
      "link": "https://example.com/health-center"
    }
  ]
}
```

## 🎨 UI Components

### Category Cards
- **Responsive Grid**: 1 column on mobile, 2 on tablet, 3 on desktop
- **Expandable Content**: Click "More Info" to view resources
- **Consistent Heights**: All cards aligned regardless of content length
- **Hover Effects**: Subtle animations for better UX

### Add Category Form
- **Modal Interface**: Overlay form with backdrop blur
- **Dynamic Resources**: Add up to 3 resources per category
- **Form Validation**: Required fields and URL validation
- **Database Integration**: Saves directly to MySQL

## 📱 Responsive Design

- **Mobile First**: Optimized for small screens
- **Breakpoints**: 
  - Mobile: < 768px (1 column)
  - Tablet: 768px - 1024px (2 columns)
  - Desktop: > 1024px (3 columns)
- **Touch Friendly**: Large tap targets and smooth scrolling

## 🔧 Database Configuration

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'django_categories',
        'USER': 'root',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

---

*Built with React, Django, and MySQL*
