import React from 'react'
import { Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';
import logo from '../../assets/imgs/theme/logo.png'
function PdfFile({ data, Id }) {

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const day = currentDate.getDate();
    
 
    return (
        <Document>

           


        </Document>
    )
}

export default PdfFile
