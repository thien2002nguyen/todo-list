import * as services from "../services";
import { internalServerError, badRequest } from "../middlewares/handle_error";
import joi from "joi";
import {
  bookId,
  bookIds,
  title,
  price,
  available,
  description,
  category_code
} from "../helpers/joi_schema";

//READ
export const getBooks = async (req, res) => {
  try {
    const response = await services.getBooks(req.query);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

//CREATE
export const createNewBook = async (req, res) => {
  try {
    const { error } = joi.object({
      title,
      price,
      available,
      description,
      category_code
    }).validate(req.body);
    console.log(req.body);
    if (error) {
      return badRequest(error.details[0].message, res);
    }
    const response = await services.createNewBook(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

//UPDATE
export const updateBook = async (req, res) => {
  try {
    const { error } = joi.object({ bookId }).validate({ bookId: req.body.bookId });
    console.log("a");
    if (error) {
      return badRequest(error.details[0].message, res);
    }
    const response = await services.updateBook(req.body);
    console.log("b");
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};
//DELETE
export const deleteBook = async (req, res) => {
  try {
    console.log(req.query.bookIds);
    const { error } = joi.object({ bookIds }).validate(req.query);
    if (error) {
      return badRequest(error.details[0].message, res);
    }
    const response = await services.deleteBook(req.query.bookIds);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};