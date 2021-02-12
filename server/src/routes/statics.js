import express, { Router } from 'express';
import patch from 'path';

const statics = Router();

statics.use('/dados', express.static(patch.join(__dirname, '..', 'dados')));

export default statics;