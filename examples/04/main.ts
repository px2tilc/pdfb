/* eslint-disable new-cap */
/* eslint-disable no-console */

import jsPDF from 'jspdf';

import { PDFBuilder } from '../../src';
import First from './pages/First.page';
import IOSEVKA from './fonts/iosevka';

const EXAMPLE_ID = '04';

const EXAMPLE_PDF_PATH = `${__dirname}/result/${EXAMPLE_ID}-example.pdf`;

const doc = new jsPDF();
const builder = new PDFBuilder(doc);

builder.FontLoader.addFontFamily(IOSEVKA);
builder.FontLoader.setFont(IOSEVKA.SEMI_BOLD);

builder.AddPage(new First(builder));

builder.render();

console.log(EXAMPLE_PDF_PATH);

builder.Document.save(EXAMPLE_PDF_PATH);