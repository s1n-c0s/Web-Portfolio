interface BentoCardProps {
    children: React.ReactNode;
    className?: string; // Used for grid-span (e.g., md:col-span-2)
  }
  
  const BentoCard = ({ children, className = "" }: BentoCardProps) => {
    return (
      <div className={`
        rounded-3xl 
        bg-neutral-900 
        border border-neutral-800 
        p-6 
        transition-all 
        duration-300 
        hover:border-neutral-700 
        hover:bg-neutral-800/50
        overflow-hidden
        flex flex-col
        ${className}
      `}>
        {children}
      </div>
    );
  };
  export default BentoCard;