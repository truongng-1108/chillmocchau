import { Routes, Route } from 'react-router-dom';
import ForestHeader from './components/layout/ForestHeader';
import TreeRootFooter from './components/layout/TreeRootFooter';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import MyTrees from './pages/MyTrees';
import TreeDetail from './pages/TreeDetail';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import Maps from './pages/Maps';
import TreeRental from './pages/TreeRental';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-vintage-50 via-vintage-100 to-forest-50 relative overflow-x-hidden">
      {/* Background texture overlay */}
      <div className="fixed inset-0 forest-texture pointer-events-none opacity-20" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <ForestHeader />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/my-trees" element={<MyTrees />} />
            <Route path="/my-trees/:id" element={<TreeDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/tree-rental/:id" element={<TreeRental />} />
          </Routes>
        </main>
        <TreeRootFooter />
      </div>
    </div>
  );
}

export default App;