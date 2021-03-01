import React from 'react';

import classes from './roleBlock.module.css';

const RoleBlock = (props) => {

    let pLabel;
    if (props.roleClass === 'first') {
        pLabel = 'Преобладающая роль';
    } else if (props.roleClass === 'second') {
        pLabel = 'Второстепенная роль';
    } else {
        pLabel = 'Слабая роль';
    }

    return (
        <div className={classes.main}>
            <img
                src={props.src}
                alt=""
            />
            <p>{pLabel}</p>
            <h3>{props.name}</h3>
            <div className={classes.parag}>
                <p className={classes.bold}>Сильные стороны:</p>
                <p className={classes.text}>
                    {props.haracteristic}
                </p>
                <p className={classes.bold}>Слабые стороны:</p>
                <p className={classes.text}>
                    {props.weakness}
                </p>
                <p className={classes.bold}>Вклад в команду:</p>
                <p className={classes.text}>
                    {props.functionality}
                </p>
            </div>
        </div>
    );
};

export default RoleBlock;