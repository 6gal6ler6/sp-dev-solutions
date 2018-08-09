import * as React from 'react';
import { IFeaturedItem } from '../../IFeaturedItem';
import { IFeaturedContentLayout } from '../FeatureContentLayout';
import FeaturedContentFactory from '../FeaturedContentFactory';
import styles from './Styles.module.scss';

const urlField = "URL";
const imageField = "Image";
const descriptionField = "Description";
const openNewTabField = "NewTab";

export default class AdvancedHorizontalTitleOnlyLayout implements IFeaturedContentLayout{
  constructor(){}

  public render(items:IFeaturedItem[], isEditMode:boolean):JSX.Element{
    return (
      <div className={styles["featured-content"]}>
        { items &&
            items.map((item) => {
              return (
                <div className={styles["featured-content-item"]}>
                  <div className={styles["featured-content-picture-container"]}>
                    {item["Image"] && 
                    <img src={item["Image"]+FeaturedContentFactory.getWidthHeightQueryStringAppendForImage(item.Image)} className="largepictureimg" alt={item.ImageAlternate}/>
                    }
                  </div>
                  <div className={styles["featured-content-title"]}>{item[urlField+"_text"]}</div>
                  <a className={styles["featured-content-link"]} href={item[urlField]} target={item[openNewTabField] ? "_blank" : ""}></a>
                </div>
              );
            })
          }
          { !items && isEditMode &&
            <div>Please configure the list mapping in the property pane of this web part.</div>
          }
        <div className={styles["clear"]}></div>        
      </div>
    );
  }
}