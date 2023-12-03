import React from 'react';

import classes from './roleBlock.module.css';

const RoleBlock = (props) => {

    let pLabel;
    if (props.roleClass === 'first') {
        pLabel = 'Переважаюча роль';
    } else if (props.roleClass === 'second') {
        pLabel = 'Другорядна роль';
    } else {
        pLabel = 'Слабка роль';
    }

    return (
        <div className={classes.main}>
            <div className={classes.first}>
                <img
                    src={props.src}
                    alt=""
                />
                <p>{pLabel}</p>
                <h3>{props.name}</h3>
            </div>
            <div className={classes.parag}>
                <p className={classes.bold}>Короткий опис:</p>
                <p className={classes.text}>
                    {props.description}
                </p>
                <p className={classes.bold}>Сильнi сторони:</p>
                <p className={classes.text}>
                    {props.haracteristic}
                </p>
                <p className={classes.bold}>Слабкi сторони:</p>
                <p className={classes.text}>
                    {props.weakness}
                </p>
                <p className={classes.bold}>Внесок у команду:</p>
                <p className={classes.text}>
                    {props.functionality}
                </p>
            </div>
        </div>
    );
};

export default RoleBlock;