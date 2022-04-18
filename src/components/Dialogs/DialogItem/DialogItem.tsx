import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/state";

export type DialogItemsPropsType = DialogType

export const DialogItems = (props: DialogItemsPropsType) => {
  return(
      <div className={classes.dialog}>
          <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
      </div>
  )
}
