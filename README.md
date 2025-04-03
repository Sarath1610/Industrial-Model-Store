# Industrial Model Store


A React-based web application for browsing, searching, and exploring industrial automation models and components. This platform serves as a centralized repository for industrial digital assets including robots, CNC machines, 3D printers, and IoT devices.

## Project Overview

The Industrial Model Store is designed to help engineers, manufacturers, and industrial automation specialists discover and utilize digital models of industrial equipment. The application provides:

- **Searchable Model Repository**: Browse through a comprehensive collection of industrial models
- **Filtering by Tags**: Quickly find models by filtering with relevant industry tags
- **Detailed Model Information**: Access documentation, usage examples, and version history
- **Responsive UI**: Modern, dark-themed interface optimized for industrial applications

The application organizes various industrial components into a searchable catalog, making it easier for professionals to locate and learn about specific industrial models that match their requirements.

## Installation Instructions

### Prerequisites

- Node.js (v16.0.0 or newer)
- npm (v8.0.0 or newer) or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sarath1610/Industrial-Model-Store
   cd Industrial-Model-Store
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **View in browser**
   The application will be available at [http://localhost:5173](http://localhost:5173)

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready to be deployed to a web server.

## Usage Examples

### Browsing Models

The main page displays all available industrial models. You can:

- **Search by name**: Use the search bar to filter models by their names
- **Filter by tags**: Click on tags in the sidebar to filter models by specific categories
    - Available tags include: robot, arm, industrial, automation, cnc, milling, etc.
- **View model details**: Click on any model card to access its detailed information

### Model Details

Each model has a dedicated detail page that includes:

- Comprehensive description of the model
- Links to documentation
- Usage examples for different applications
- Version information with stability indicators (stable, experimental, etc.)

### Adding Custom Models

While the current implementation uses mock data, you can extend the application by:

1. Adding your model data to the `src/assets/mockModels.json` file following the existing format:

```json
{
  "id": 18,
  "name": "Your Model Name",
  "description": "Detailed description of your model.",
  "categories": ["Category1", "Category2"],
  "tags": ["tag1", "tag2", "tag3"],
  "imageUrl": "/assets/your-model-image.jpg",
  "documentation": "https://example.com/your-model-docs",
  "usageExamples": ["Example 1", "Example 2"],
  "versions": [
    {
      "version": "1.0.0",
      "status": "stable"
    }
  ]
}
```

2. Place corresponding model images in the `src/assets` directory
3. Update the `FilterBar.jsx` with any new tags you've introduced

## Dependencies and Requirements

### Core Dependencies

- React (v19.0.0)
- React DOM (v19.0.0)
- React Router DOM (v7.4.1)
- Material UI (@mui/material v7.0.1 and @mui/icons-material v7.0.1)

### Development Dependencies

- Vite (v6.2.0)
- ESLint (v9.21.0)
    - @eslint/js
    - eslint-plugin-react-hooks
    - eslint-plugin-react-refresh
- TypeScript types for React (for IDE support)

### Browser Compatibility

The application uses modern JavaScript features and React 19, ensuring compatibility with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### System Requirements

- **Development**: Any system capable of running Node.js
- **Production hosting**: Any static file hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Future Enhancements

- Implementation of a backend API to replace mock data
- User authentication and model favoriting
- Model comparison functionality
- 3D preview of models where applicable
- API for programmatic access to model information
