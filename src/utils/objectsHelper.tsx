import React from 'react';

export const updateObjectInArray = (items: any[], item_ID: number, objPropName: string, newObjProps: any) => {
    return items.map((el: any) => el[objPropName] === item_ID ? {...el, ...newObjProps} : el);
}