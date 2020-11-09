import React from 'react';
import './Card.css';



const PromotionCard = ({promotion}) => (
    <div className="promotion-card"> 
        <img src={promotion.imageUrl} className="promotion-card-img"/>
    
    <div className="promotion-card-info">
    <h1 className="promotion-card-title"> {promotion.title}</h1>
    <span  className="promotion-card-price"> R$ {promotion.price}</span>
    <footer  className="promotion-card-footer"> 
        {promotion.comments.length > 0 && (
            <div className="promotion-card-comments"> "{promotion.comments[0].comment} "</div>
        )}

        <div  className="promotion-card-commentcount">  ( {promotion.comments.length} ) {promotion.comments.length > 1 ? "Comentários" : "Comentário"} </div>
        <a  className="promotion-card-link" href={promotion.url} target="blank" > IR PARA O SITE </a>
    </footer>
    </div>
        
    </div>
);


export default PromotionCard;