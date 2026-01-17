var wms_layers = [];

var lyr_SAcopy_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SA copy<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SAcopy_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [598921.407080, -4351398.005014, 5021845.243468, 1176495.263689]
        })
    });
var lyr_SA_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SA<br />\
    <img src="styles/legend/SA_1_0.png" /> 0.0000<br />\
    <img src="styles/legend/SA_1_1.png" /> 40.0868<br />\
    <img src="styles/legend/SA_1_2.png" /> 575.3797<br />\
    <img src="styles/legend/SA_1_3.png" /> 1085.1825<br />\
    <img src="styles/legend/SA_1_4.png" /> 5768.7789<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SA_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [598921.407080, -4351398.005014, 5021845.243468, 1176495.263689]
        })
    });
var lyr_SA_Noneg_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SA_Noneg<br />\
    <img src="styles/legend/SA_Noneg_2_0.png" /> <= 0.0000<br />\
    <img src="styles/legend/SA_Noneg_2_1.png" /> 0.0000 - 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SA_Noneg_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [598921.407080, -4351398.005014, 5021845.243468, 1176495.263689]
        })
    });
var format_basin_3_3 = new ol.format.GeoJSON();
var features_basin_3_3 = format_basin_3_3.readFeatures(json_basin_3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basin_3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_basin_3_3.addFeatures(features_basin_3_3);
var lyr_basin_3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_basin_3_3, 
                style: style_basin_3_3,
                popuplayertitle: 'basin_3',
                interactive: true,
    title: 'basin_3<br />\
    <img src="styles/legend/basin_3_3_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/basin_3_3_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/basin_3_3_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/basin_3_3_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/basin_3_3_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/basin_3_3_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/basin_3_3_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/basin_3_3_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/basin_3_3_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/basin_3_3_9.png" /> 11701 - 20645<br />' });
var format_basin_4_4 = new ol.format.GeoJSON();
var features_basin_4_4 = format_basin_4_4.readFeatures(json_basin_4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basin_4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_basin_4_4.addFeatures(features_basin_4_4);
var lyr_basin_4_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_basin_4_4, 
                style: style_basin_4_4,
                popuplayertitle: 'basin_4',
                interactive: true,
    title: 'basin_4<br />\
    <img src="styles/legend/basin_4_4_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/basin_4_4_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/basin_4_4_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/basin_4_4_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/basin_4_4_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/basin_4_4_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/basin_4_4_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/basin_4_4_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/basin_4_4_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/basin_4_4_9.png" /> 11701 - 20645<br />' });
var format_basin_5_5 = new ol.format.GeoJSON();
var features_basin_5_5 = format_basin_5_5.readFeatures(json_basin_5_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basin_5_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_basin_5_5.addFeatures(features_basin_5_5);
var lyr_basin_5_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_basin_5_5, 
                style: style_basin_5_5,
                popuplayertitle: 'basin_5',
                interactive: true,
    title: 'basin_5<br />\
    <img src="styles/legend/basin_5_5_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/basin_5_5_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/basin_5_5_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/basin_5_5_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/basin_5_5_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/basin_5_5_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/basin_5_5_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/basin_5_5_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/basin_5_5_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/basin_5_5_9.png" /> 11701 - 20645<br />' });
var format_basin_6_6 = new ol.format.GeoJSON();
var features_basin_6_6 = format_basin_6_6.readFeatures(json_basin_6_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basin_6_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_basin_6_6.addFeatures(features_basin_6_6);
var lyr_basin_6_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_basin_6_6, 
                style: style_basin_6_6,
                popuplayertitle: 'basin_6',
                interactive: true,
    title: 'basin_6<br />\
    <img src="styles/legend/basin_6_6_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/basin_6_6_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/basin_6_6_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/basin_6_6_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/basin_6_6_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/basin_6_6_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/basin_6_6_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/basin_6_6_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/basin_6_6_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/basin_6_6_9.png" /> 11701 - 20645<br />' });
var format_basin_7_7 = new ol.format.GeoJSON();
var features_basin_7_7 = format_basin_7_7.readFeatures(json_basin_7_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basin_7_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_basin_7_7.addFeatures(features_basin_7_7);
var lyr_basin_7_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_basin_7_7, 
                style: style_basin_7_7,
                popuplayertitle: 'basin_7',
                interactive: true,
    title: 'basin_7<br />\
    <img src="styles/legend/basin_7_7_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/basin_7_7_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/basin_7_7_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/basin_7_7_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/basin_7_7_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/basin_7_7_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/basin_7_7_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/basin_7_7_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/basin_7_7_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/basin_7_7_9.png" /> 11701 - 20645<br />' });
var format_basin_8_8 = new ol.format.GeoJSON();
var features_basin_8_8 = format_basin_8_8.readFeatures(json_basin_8_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basin_8_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_basin_8_8.addFeatures(features_basin_8_8);
var lyr_basin_8_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_basin_8_8, 
                style: style_basin_8_8,
                popuplayertitle: 'basin_8',
                interactive: true,
    title: 'basin_8<br />\
    <img src="styles/legend/basin_8_8_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/basin_8_8_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/basin_8_8_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/basin_8_8_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/basin_8_8_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/basin_8_8_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/basin_8_8_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/basin_8_8_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/basin_8_8_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/basin_8_8_9.png" /> 11701 - 20645<br />' });
var format_basin_9_9 = new ol.format.GeoJSON();
var features_basin_9_9 = format_basin_9_9.readFeatures(json_basin_9_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basin_9_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_basin_9_9.addFeatures(features_basin_9_9);
var lyr_basin_9_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_basin_9_9, 
                style: style_basin_9_9,
                popuplayertitle: 'basin_9',
                interactive: true,
    title: 'basin_9<br />\
    <img src="styles/legend/basin_9_9_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/basin_9_9_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/basin_9_9_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/basin_9_9_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/basin_9_9_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/basin_9_9_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/basin_9_9_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/basin_9_9_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/basin_9_9_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/basin_9_9_9.png" /> 11701 - 20645<br />' });
var format_basin_10_10 = new ol.format.GeoJSON();
var features_basin_10_10 = format_basin_10_10.readFeatures(json_basin_10_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basin_10_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_basin_10_10.addFeatures(features_basin_10_10);
var lyr_basin_10_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_basin_10_10, 
                style: style_basin_10_10,
                popuplayertitle: 'basin_10',
                interactive: true,
    title: 'basin_10<br />\
    <img src="styles/legend/basin_10_10_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/basin_10_10_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/basin_10_10_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/basin_10_10_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/basin_10_10_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/basin_10_10_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/basin_10_10_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/basin_10_10_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/basin_10_10_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/basin_10_10_9.png" /> 11701 - 20645<br />' });
var format_basin_11_11 = new ol.format.GeoJSON();
var features_basin_11_11 = format_basin_11_11.readFeatures(json_basin_11_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basin_11_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_basin_11_11.addFeatures(features_basin_11_11);
var lyr_basin_11_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_basin_11_11, 
                style: style_basin_11_11,
                popuplayertitle: 'basin_11',
                interactive: true,
    title: 'basin_11<br />\
    <img src="styles/legend/basin_11_11_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/basin_11_11_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/basin_11_11_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/basin_11_11_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/basin_11_11_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/basin_11_11_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/basin_11_11_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/basin_11_11_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/basin_11_11_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/basin_11_11_9.png" /> 11701 - 20645<br />' });
var format_basin_12_12 = new ol.format.GeoJSON();
var features_basin_12_12 = format_basin_12_12.readFeatures(json_basin_12_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basin_12_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_basin_12_12.addFeatures(features_basin_12_12);
var lyr_basin_12_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_basin_12_12, 
                style: style_basin_12_12,
                popuplayertitle: 'basin_12',
                interactive: true,
    title: 'basin_12<br />\
    <img src="styles/legend/basin_12_12_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/basin_12_12_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/basin_12_12_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/basin_12_12_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/basin_12_12_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/basin_12_12_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/basin_12_12_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/basin_12_12_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/basin_12_12_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/basin_12_12_9.png" /> 11701 - 20645<br />' });
var format_basin_13_13 = new ol.format.GeoJSON();
var features_basin_13_13 = format_basin_13_13.readFeatures(json_basin_13_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basin_13_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_basin_13_13.addFeatures(features_basin_13_13);
var lyr_basin_13_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_basin_13_13, 
                style: style_basin_13_13,
                popuplayertitle: 'basin_13',
                interactive: true,
    title: 'basin_13<br />\
    <img src="styles/legend/basin_13_13_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/basin_13_13_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/basin_13_13_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/basin_13_13_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/basin_13_13_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/basin_13_13_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/basin_13_13_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/basin_13_13_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/basin_13_13_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/basin_13_13_9.png" /> 11701 - 20645<br />' });
var format_basin_14_14 = new ol.format.GeoJSON();
var features_basin_14_14 = format_basin_14_14.readFeatures(json_basin_14_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basin_14_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_basin_14_14.addFeatures(features_basin_14_14);
var lyr_basin_14_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_basin_14_14, 
                style: style_basin_14_14,
                popuplayertitle: 'basin_14',
                interactive: true,
    title: 'basin_14<br />\
    <img src="styles/legend/basin_14_14_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/basin_14_14_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/basin_14_14_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/basin_14_14_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/basin_14_14_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/basin_14_14_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/basin_14_14_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/basin_14_14_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/basin_14_14_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/basin_14_14_9.png" /> 11701 - 20645<br />' });
var format_basin_15_15 = new ol.format.GeoJSON();
var features_basin_15_15 = format_basin_15_15.readFeatures(json_basin_15_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basin_15_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_basin_15_15.addFeatures(features_basin_15_15);
var lyr_basin_15_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_basin_15_15, 
                style: style_basin_15_15,
                popuplayertitle: 'basin_15',
                interactive: true,
    title: 'basin_15<br />\
    <img src="styles/legend/basin_15_15_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/basin_15_15_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/basin_15_15_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/basin_15_15_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/basin_15_15_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/basin_15_15_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/basin_15_15_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/basin_15_15_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/basin_15_15_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/basin_15_15_9.png" /> 11701 - 20645<br />' });
var format_Congo_chishape_16 = new ol.format.GeoJSON();
var features_Congo_chishape_16 = format_Congo_chishape_16.readFeatures(json_Congo_chishape_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Congo_chishape_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Congo_chishape_16.addFeatures(features_Congo_chishape_16);
var lyr_Congo_chishape_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Congo_chishape_16, 
                style: style_Congo_chishape_16,
                popuplayertitle: 'Congo_chishape',
                interactive: true,
    title: 'Congo_chishape<br />\
    <img src="styles/legend/Congo_chishape_16_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/Congo_chishape_16_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/Congo_chishape_16_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/Congo_chishape_16_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/Congo_chishape_16_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/Congo_chishape_16_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/Congo_chishape_16_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/Congo_chishape_16_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/Congo_chishape_16_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/Congo_chishape_16_9.png" /> 11701 - 20645<br />' });
var format_Kunene_chishape_17 = new ol.format.GeoJSON();
var features_Kunene_chishape_17 = format_Kunene_chishape_17.readFeatures(json_Kunene_chishape_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kunene_chishape_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kunene_chishape_17.addFeatures(features_Kunene_chishape_17);
var lyr_Kunene_chishape_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kunene_chishape_17, 
                style: style_Kunene_chishape_17,
                popuplayertitle: 'Kunene_chishape',
                interactive: true,
    title: 'Kunene_chishape<br />\
    <img src="styles/legend/Kunene_chishape_17_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/Kunene_chishape_17_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/Kunene_chishape_17_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/Kunene_chishape_17_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/Kunene_chishape_17_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/Kunene_chishape_17_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/Kunene_chishape_17_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/Kunene_chishape_17_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/Kunene_chishape_17_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/Kunene_chishape_17_9.png" /> 11701 - 20645<br />' });
var format_Limpopo_chishape_18 = new ol.format.GeoJSON();
var features_Limpopo_chishape_18 = format_Limpopo_chishape_18.readFeatures(json_Limpopo_chishape_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limpopo_chishape_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limpopo_chishape_18.addFeatures(features_Limpopo_chishape_18);
var lyr_Limpopo_chishape_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limpopo_chishape_18, 
                style: style_Limpopo_chishape_18,
                popuplayertitle: 'Limpopo_chishape',
                interactive: true,
    title: 'Limpopo_chishape<br />\
    <img src="styles/legend/Limpopo_chishape_18_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/Limpopo_chishape_18_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/Limpopo_chishape_18_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/Limpopo_chishape_18_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/Limpopo_chishape_18_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/Limpopo_chishape_18_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/Limpopo_chishape_18_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/Limpopo_chishape_18_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/Limpopo_chishape_18_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/Limpopo_chishape_18_9.png" /> 11701 - 20645<br />' });
var format_Orange_chishape_19 = new ol.format.GeoJSON();
var features_Orange_chishape_19 = format_Orange_chishape_19.readFeatures(json_Orange_chishape_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Orange_chishape_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Orange_chishape_19.addFeatures(features_Orange_chishape_19);
var lyr_Orange_chishape_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Orange_chishape_19, 
                style: style_Orange_chishape_19,
                popuplayertitle: 'Orange_chishape',
                interactive: true,
    title: 'Orange_chishape<br />\
    <img src="styles/legend/Orange_chishape_19_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/Orange_chishape_19_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/Orange_chishape_19_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/Orange_chishape_19_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/Orange_chishape_19_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/Orange_chishape_19_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/Orange_chishape_19_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/Orange_chishape_19_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/Orange_chishape_19_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/Orange_chishape_19_9.png" /> 11701 - 20645<br />' });
var format_Rufiji_chishape_20 = new ol.format.GeoJSON();
var features_Rufiji_chishape_20 = format_Rufiji_chishape_20.readFeatures(json_Rufiji_chishape_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rufiji_chishape_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rufiji_chishape_20.addFeatures(features_Rufiji_chishape_20);
var lyr_Rufiji_chishape_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rufiji_chishape_20, 
                style: style_Rufiji_chishape_20,
                popuplayertitle: 'Rufiji_chishape',
                interactive: true,
    title: 'Rufiji_chishape<br />\
    <img src="styles/legend/Rufiji_chishape_20_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/Rufiji_chishape_20_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/Rufiji_chishape_20_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/Rufiji_chishape_20_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/Rufiji_chishape_20_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/Rufiji_chishape_20_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/Rufiji_chishape_20_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/Rufiji_chishape_20_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/Rufiji_chishape_20_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/Rufiji_chishape_20_9.png" /> 11701 - 20645<br />' });
var format_Ruvu_chishape_21 = new ol.format.GeoJSON();
var features_Ruvu_chishape_21 = format_Ruvu_chishape_21.readFeatures(json_Ruvu_chishape_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruvu_chishape_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruvu_chishape_21.addFeatures(features_Ruvu_chishape_21);
var lyr_Ruvu_chishape_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruvu_chishape_21, 
                style: style_Ruvu_chishape_21,
                popuplayertitle: 'Ruvu_chishape',
                interactive: true,
    title: 'Ruvu_chishape<br />\
    <img src="styles/legend/Ruvu_chishape_21_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/Ruvu_chishape_21_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/Ruvu_chishape_21_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/Ruvu_chishape_21_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/Ruvu_chishape_21_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/Ruvu_chishape_21_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/Ruvu_chishape_21_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/Ruvu_chishape_21_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/Ruvu_chishape_21_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/Ruvu_chishape_21_9.png" /> 11701 - 20645<br />' });
var format_Ruvuma_chishape_22 = new ol.format.GeoJSON();
var features_Ruvuma_chishape_22 = format_Ruvuma_chishape_22.readFeatures(json_Ruvuma_chishape_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruvuma_chishape_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruvuma_chishape_22.addFeatures(features_Ruvuma_chishape_22);
var lyr_Ruvuma_chishape_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruvuma_chishape_22, 
                style: style_Ruvuma_chishape_22,
                popuplayertitle: 'Ruvuma_chishape',
                interactive: true,
    title: 'Ruvuma_chishape<br />\
    <img src="styles/legend/Ruvuma_chishape_22_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/Ruvuma_chishape_22_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/Ruvuma_chishape_22_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/Ruvuma_chishape_22_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/Ruvuma_chishape_22_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/Ruvuma_chishape_22_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/Ruvuma_chishape_22_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/Ruvuma_chishape_22_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/Ruvuma_chishape_22_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/Ruvuma_chishape_22_9.png" /> 11701 - 20645<br />' });
var format_Save_chishape_23 = new ol.format.GeoJSON();
var features_Save_chishape_23 = format_Save_chishape_23.readFeatures(json_Save_chishape_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Save_chishape_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Save_chishape_23.addFeatures(features_Save_chishape_23);
var lyr_Save_chishape_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Save_chishape_23, 
                style: style_Save_chishape_23,
                popuplayertitle: 'Save_chishape',
                interactive: true,
    title: 'Save_chishape<br />\
    <img src="styles/legend/Save_chishape_23_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/Save_chishape_23_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/Save_chishape_23_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/Save_chishape_23_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/Save_chishape_23_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/Save_chishape_23_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/Save_chishape_23_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/Save_chishape_23_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/Save_chishape_23_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/Save_chishape_23_9.png" /> 11701 - 20645<br />' });
var format_ZambeziOkavango_chishape_24 = new ol.format.GeoJSON();
var features_ZambeziOkavango_chishape_24 = format_ZambeziOkavango_chishape_24.readFeatures(json_ZambeziOkavango_chishape_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZambeziOkavango_chishape_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZambeziOkavango_chishape_24.addFeatures(features_ZambeziOkavango_chishape_24);
var lyr_ZambeziOkavango_chishape_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZambeziOkavango_chishape_24, 
                style: style_ZambeziOkavango_chishape_24,
                popuplayertitle: 'Zambezi-Okavango_chishape',
                interactive: true,
    title: 'Zambezi-Okavango_chishape<br />\
    <img src="styles/legend/ZambeziOkavango_chishape_24_0.png" /> 5 - 3154<br />\
    <img src="styles/legend/ZambeziOkavango_chishape_24_1.png" /> 3154 - 4470<br />\
    <img src="styles/legend/ZambeziOkavango_chishape_24_2.png" /> 4470 - 5479<br />\
    <img src="styles/legend/ZambeziOkavango_chishape_24_3.png" /> 5479 - 6397<br />\
    <img src="styles/legend/ZambeziOkavango_chishape_24_4.png" /> 6397 - 7283<br />\
    <img src="styles/legend/ZambeziOkavango_chishape_24_5.png" /> 7283 - 8166<br />\
    <img src="styles/legend/ZambeziOkavango_chishape_24_6.png" /> 8166 - 9124<br />\
    <img src="styles/legend/ZambeziOkavango_chishape_24_7.png" /> 9124 - 10215<br />\
    <img src="styles/legend/ZambeziOkavango_chishape_24_8.png" /> 10215 - 11701<br />\
    <img src="styles/legend/ZambeziOkavango_chishape_24_9.png" /> 11701 - 20645<br />' });
var format_Lakes_25 = new ol.format.GeoJSON();
var features_Lakes_25 = format_Lakes_25.readFeatures(json_Lakes_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lakes_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lakes_25.addFeatures(features_Lakes_25);
var lyr_Lakes_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lakes_25, 
                style: style_Lakes_25,
                popuplayertitle: 'Lakes',
                interactive: true,
                title: '<img src="styles/legend/Lakes_25.png" /> Lakes'
            });

lyr_SAcopy_0.setVisible(true);lyr_SA_1.setVisible(true);lyr_SA_Noneg_2.setVisible(true);lyr_basin_3_3.setVisible(true);lyr_basin_4_4.setVisible(true);lyr_basin_5_5.setVisible(true);lyr_basin_6_6.setVisible(true);lyr_basin_7_7.setVisible(true);lyr_basin_8_8.setVisible(true);lyr_basin_9_9.setVisible(true);lyr_basin_10_10.setVisible(true);lyr_basin_11_11.setVisible(true);lyr_basin_12_12.setVisible(true);lyr_basin_13_13.setVisible(true);lyr_basin_14_14.setVisible(true);lyr_basin_15_15.setVisible(true);lyr_Congo_chishape_16.setVisible(true);lyr_Kunene_chishape_17.setVisible(true);lyr_Limpopo_chishape_18.setVisible(true);lyr_Orange_chishape_19.setVisible(true);lyr_Rufiji_chishape_20.setVisible(true);lyr_Ruvu_chishape_21.setVisible(true);lyr_Ruvuma_chishape_22.setVisible(true);lyr_Save_chishape_23.setVisible(true);lyr_ZambeziOkavango_chishape_24.setVisible(true);lyr_Lakes_25.setVisible(true);
var layersList = [lyr_SAcopy_0,lyr_SA_1,lyr_SA_Noneg_2,lyr_basin_3_3,lyr_basin_4_4,lyr_basin_5_5,lyr_basin_6_6,lyr_basin_7_7,lyr_basin_8_8,lyr_basin_9_9,lyr_basin_10_10,lyr_basin_11_11,lyr_basin_12_12,lyr_basin_13_13,lyr_basin_14_14,lyr_basin_15_15,lyr_Congo_chishape_16,lyr_Kunene_chishape_17,lyr_Limpopo_chishape_18,lyr_Orange_chishape_19,lyr_Rufiji_chishape_20,lyr_Ruvu_chishape_21,lyr_Ruvuma_chishape_22,lyr_Save_chishape_23,lyr_ZambeziOkavango_chishape_24,lyr_Lakes_25];
lyr_basin_3_3.set('fieldAliases', {'chi': 'chi', });
lyr_basin_4_4.set('fieldAliases', {'chi': 'chi', });
lyr_basin_5_5.set('fieldAliases', {'chi': 'chi', });
lyr_basin_6_6.set('fieldAliases', {'chi': 'chi', });
lyr_basin_7_7.set('fieldAliases', {'chi': 'chi', });
lyr_basin_8_8.set('fieldAliases', {'chi': 'chi', });
lyr_basin_9_9.set('fieldAliases', {'chi': 'chi', });
lyr_basin_10_10.set('fieldAliases', {'chi': 'chi', });
lyr_basin_11_11.set('fieldAliases', {'chi': 'chi', });
lyr_basin_12_12.set('fieldAliases', {'chi': 'chi', });
lyr_basin_13_13.set('fieldAliases', {'chi': 'chi', });
lyr_basin_14_14.set('fieldAliases', {'chi': 'chi', });
lyr_basin_15_15.set('fieldAliases', {'chi': 'chi', });
lyr_Congo_chishape_16.set('fieldAliases', {'chi': 'chi', });
lyr_Kunene_chishape_17.set('fieldAliases', {'chi': 'chi', });
lyr_Limpopo_chishape_18.set('fieldAliases', {'chi': 'chi', });
lyr_Orange_chishape_19.set('fieldAliases', {'chi': 'chi', });
lyr_Rufiji_chishape_20.set('fieldAliases', {'chi': 'chi', });
lyr_Ruvu_chishape_21.set('fieldAliases', {'chi': 'chi', });
lyr_Ruvuma_chishape_22.set('fieldAliases', {'chi': 'chi', });
lyr_Save_chishape_23.set('fieldAliases', {'chi': 'chi', });
lyr_ZambeziOkavango_chishape_24.set('fieldAliases', {'chi': 'chi', });
lyr_Lakes_25.set('fieldAliases', {'SUB_BAS': 'SUB_BAS', 'TO_BAS': 'TO_BAS', 'MAJ_BAS': 'MAJ_BAS', 'SUB_NAME': 'SUB_NAME', 'MAJ_NAME': 'MAJ_NAME', 'SUB_AREA': 'SUB_AREA', 'MAJ_AREA': 'MAJ_AREA', 'LEGEND': 'LEGEND', });
lyr_basin_3_3.set('fieldImages', {'chi': 'TextEdit', });
lyr_basin_4_4.set('fieldImages', {'chi': 'TextEdit', });
lyr_basin_5_5.set('fieldImages', {'chi': 'TextEdit', });
lyr_basin_6_6.set('fieldImages', {'chi': 'TextEdit', });
lyr_basin_7_7.set('fieldImages', {'chi': 'TextEdit', });
lyr_basin_8_8.set('fieldImages', {'chi': 'TextEdit', });
lyr_basin_9_9.set('fieldImages', {'chi': 'TextEdit', });
lyr_basin_10_10.set('fieldImages', {'chi': 'TextEdit', });
lyr_basin_11_11.set('fieldImages', {'chi': 'TextEdit', });
lyr_basin_12_12.set('fieldImages', {'chi': 'TextEdit', });
lyr_basin_13_13.set('fieldImages', {'chi': 'TextEdit', });
lyr_basin_14_14.set('fieldImages', {'chi': 'TextEdit', });
lyr_basin_15_15.set('fieldImages', {'chi': 'TextEdit', });
lyr_Congo_chishape_16.set('fieldImages', {'chi': 'TextEdit', });
lyr_Kunene_chishape_17.set('fieldImages', {'chi': 'TextEdit', });
lyr_Limpopo_chishape_18.set('fieldImages', {'chi': 'TextEdit', });
lyr_Orange_chishape_19.set('fieldImages', {'chi': 'TextEdit', });
lyr_Rufiji_chishape_20.set('fieldImages', {'chi': 'TextEdit', });
lyr_Ruvu_chishape_21.set('fieldImages', {'chi': 'TextEdit', });
lyr_Ruvuma_chishape_22.set('fieldImages', {'chi': 'TextEdit', });
lyr_Save_chishape_23.set('fieldImages', {'chi': 'TextEdit', });
lyr_ZambeziOkavango_chishape_24.set('fieldImages', {'chi': 'TextEdit', });
lyr_Lakes_25.set('fieldImages', {'SUB_BAS': 'Range', 'TO_BAS': 'Range', 'MAJ_BAS': 'Range', 'SUB_NAME': 'TextEdit', 'MAJ_NAME': 'TextEdit', 'SUB_AREA': 'Range', 'MAJ_AREA': 'Range', 'LEGEND': 'Range', });
lyr_basin_3_3.set('fieldLabels', {'chi': 'no label', });
lyr_basin_4_4.set('fieldLabels', {'chi': 'no label', });
lyr_basin_5_5.set('fieldLabels', {'chi': 'no label', });
lyr_basin_6_6.set('fieldLabels', {'chi': 'no label', });
lyr_basin_7_7.set('fieldLabels', {'chi': 'no label', });
lyr_basin_8_8.set('fieldLabels', {'chi': 'no label', });
lyr_basin_9_9.set('fieldLabels', {'chi': 'no label', });
lyr_basin_10_10.set('fieldLabels', {'chi': 'no label', });
lyr_basin_11_11.set('fieldLabels', {'chi': 'no label', });
lyr_basin_12_12.set('fieldLabels', {'chi': 'no label', });
lyr_basin_13_13.set('fieldLabels', {'chi': 'no label', });
lyr_basin_14_14.set('fieldLabels', {'chi': 'no label', });
lyr_basin_15_15.set('fieldLabels', {'chi': 'no label', });
lyr_Congo_chishape_16.set('fieldLabels', {'chi': 'no label', });
lyr_Kunene_chishape_17.set('fieldLabels', {'chi': 'no label', });
lyr_Limpopo_chishape_18.set('fieldLabels', {'chi': 'no label', });
lyr_Orange_chishape_19.set('fieldLabels', {'chi': 'no label', });
lyr_Rufiji_chishape_20.set('fieldLabels', {'chi': 'no label', });
lyr_Ruvu_chishape_21.set('fieldLabels', {'chi': 'no label', });
lyr_Ruvuma_chishape_22.set('fieldLabels', {'chi': 'no label', });
lyr_Save_chishape_23.set('fieldLabels', {'chi': 'no label', });
lyr_ZambeziOkavango_chishape_24.set('fieldLabels', {'chi': 'no label', });
lyr_Lakes_25.set('fieldLabels', {'SUB_BAS': 'no label', 'TO_BAS': 'no label', 'MAJ_BAS': 'no label', 'SUB_NAME': 'no label', 'MAJ_NAME': 'no label', 'SUB_AREA': 'no label', 'MAJ_AREA': 'no label', 'LEGEND': 'no label', });
lyr_Lakes_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});