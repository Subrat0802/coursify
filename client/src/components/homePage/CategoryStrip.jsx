import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CategoryStrip = () => {
  const categories = useSelector((state) => state.category.categories) || [];
  const navigate = useNavigate();

  if (categories.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat._id}
            onClick={() => navigate(`/allcourses/category/${cat._id}`)}
            className="text-sm px-3 py-1 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-violet-500 hover:bg-violet-600/10 transition-colors"
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryStrip;


