import "./index.css";

export function WholePageLoading({ className = "" }) {
  return (
    <div className="whole_page_loading">
      <div className={`loading ${className}`} />
    </div>
  );
}
