import clsx from "clsx";
import styles from "./List.styles.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Todo } from "redux/slices/todoSlice";
import { getListItemExtraStyling } from "./List.utils";
import { ListItem } from "../ListItem";

interface Props {
  darkMode: boolean;
  todos: Todo[];
}

export const List = ({ darkMode, todos }: Props) => {
  return (
    <>
      <AnimatePresence>
        <div className={clsx(styles.list)}>
          {todos?.map((item) => {
            const { done, id } = item;
            return (
              <motion.div
                layout
                key={id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 600, damping: 40 }}
              >
                <ListItem
                  className={clsx(
                    styles.listItem,
                    getListItemExtraStyling({ styles, done, darkMode })
                  )}
                  {...item}
                />
              </motion.div>
            );
          })}
        </div>
      </AnimatePresence>
    </>
  );
};
