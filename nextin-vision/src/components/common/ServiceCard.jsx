import Button from "../common/Button";

const ServiceCard = ({ title, description, icon: Icon, price }) => {
  return (
    <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
      <div className="mb-4">
        {Icon && <Icon className="w-12 h-12 text-blue-600" />}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {price && (
        <p className="text-sm text-gray-500">
          Starting from <span className="font-semibold">${price}</span>
        </p>
      )}
      <Button variant="outline" size="sm" className="mt-4">
        Learn More
      </Button>
    </div>
  );
};

export default ServiceCard;