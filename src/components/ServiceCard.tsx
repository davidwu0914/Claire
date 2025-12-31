import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    price: string;
    imageUrl?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, imageUrl }) => {
    return (
        <div className="service-card">
            {imageUrl && <img src={imageUrl} alt={title} className="service-card-image" />}
            <h3 className="service-card-title">{title.toUpperCase()}</h3>
            <p className="service-card-description">{description}</p>
            <p className="service-card-price">{price}</p>
        </div>
    );
};

export default ServiceCard;