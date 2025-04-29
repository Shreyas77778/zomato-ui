// components/SkeletonLoader.js
const SkeletonLoader = () => {
    return (
      <div className="skeleton-card">
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
          <div className="skeleton-title"></div>
          <div className="skeleton-rating"></div>
          <div className="skeleton-cuisine"></div>
          <div className="skeleton-info"></div>
        </div>
      </div>
    );
  };
  
  export default SkeletonLoader;