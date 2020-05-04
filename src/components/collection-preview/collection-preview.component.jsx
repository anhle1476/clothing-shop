import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from "./collection-preview.styles";

function CollectionPreview({ id, title, routeName, items }) {
  return (
    <CollectionPreviewContainer>
      <TitleContainer to={`shop/${title.toLowerCase()}`} className='title'>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items.map((item, idx) => {
          if (idx >= 4) return null;
          return <CollectionItem key={item.id} item={item} />;
        })}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}

export default CollectionPreview;
