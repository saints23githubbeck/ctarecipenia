import React from 'react';
import styles from '../../../assets/css/Show.module.css';
import food1 from '../../../images/food1.png';
import food2 from '../../../images/food2.png';
import food3 from '../../../images/food3.png';
import food4 from '../../../images/food4.png';

const Show = () => {
    return (
        <div className={styles.communities}>
            <div class="row community-food">
                <div class="col-md-3 p-0">
                    <img className="img-fluid p-0 m-0 w-100" src={food1} alt="" />
                </div>
                <div class="col-md-3 p-0">
                    <img className="img-fluid p-0 m-0 w-100" src={food2} alt="" />
                </div>
                <div class="col-md-3 p-0">
                    <img className="img-fluid p-0 m-0 w-100" src={food3} alt="" />
                </div>
                <div class="col-md-3 p-0">
                    <img className="img-fluid p-0 m-0 w-100" src={food4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Show;