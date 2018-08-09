import * as React from 'react';
import { IFeaturedItem } from '../../IFeaturedItem';
import { IFeaturedContentLayout } from '../FeatureContentLayout';
import FeaturedContentFactory from '../FeaturedContentFactory';
import styles from './Styles.module.scss';

const urlField = "URL";
const imageField = "Image";
const contentField = "Content";
const descriptionField = "Description";
const openNewTabField = "NewTab";

export default class AdvancedStackedLayout implements IFeaturedContentLayout{
  constructor(){}

  public render(items:IFeaturedItem[], isEditMode:boolean):JSX.Element{
    return (
      <div className={styles["featured-content"]}>
        { items &&
            items.map((item) => {
              return (
                <div className={styles["featured-content-item"]}>
                  <div role="presentation" className={styles["box-container"]}>
                    <div className={styles["image"]}>
                      <a className={styles["featured-content-link"]} href={item[urlField]} target={item[openNewTabField] ? "_blank" : ""}></a>
                      {item[imageField] && 
                      <img src={item[imageField]+FeaturedContentFactory.getWidthHeightQueryStringAppendForImage(item[imageField])}/>
                      }
                    </div>
                    <div className={styles["content"]}>
                      <div className={styles["title"]}>
                        <a className={styles["featured-content-link"]} href={item[urlField]} target={item[openNewTabField] ? "_blank" : ""}>{item[urlField+"_text"]}</a>
                      </div>
                      <span className={styles["description"]}>{item[descriptionField]}</span>
                      <span className={styles["rich-text-field"]} dangerouslySetInnerHTML={{__html:item[contentField]}}></span>
                    </div>
                  </div>
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