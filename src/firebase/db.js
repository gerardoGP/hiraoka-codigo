import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./config";

const collectionUsers = "users";
const collectionCells = "cells";

export const createUser = (newUser) =>
  addDoc(collection(db, collectionUsers), newUser);

export const getCells = () => getDocs(collection(db, collectionCells));
export const getCell = (codigo) => getDoc(doc(db, collectionCells, codigo));