import React, { useState } from "react";
import s from "./police.module.css";
import { FormatAlignCenter, FormatAlignLeft, FormatAlignRight, FormatBold, FormatItalic, FormatUnderlined, FormatColorFill, FormatSize } from "@mui/icons-material";
import PortalModalRoot from "../../Portals/PortalModalRoot";
import PortalModalRootWS from "../../Portals/PortalModalRootWS";

const Police = () => {
    const [selectionStyles, setSelectionStyles] = useState({
        bold: false,
        italic: false,
        underlined: false,
        color: false,
        left: false,
        center: false,
        right: false,
        fontsizes: false
    });
    const [textedit, setTextEdit] = useState(false)
    const [color, setColor] = useState("") 
    const [fonts, setFonts] = useState("") 

    const toggleColor = () => {
        const newStyles = { ...selectionStyles };
        const newColor = color;
        newStyles.color = !newStyles.color;
        setSelectionStyles(newStyles);
        applyStyle("foreColor", newColor);
    };

    const toggleFont = () => {
        const newStyles = { ...selectionStyles };
        const newFont = color;
        newStyles.font = !newStyles.font;
        setSelectionStyles(newStyles);
        applyStyle("foreFont", newFont);
    };

    const applyStyle = (style, value) => {
        document.execCommand(style, false, value);
    };

    const checkStyle = (style) => {
        return selectionStyles[style] ? s.special : "";
    };

    const toggleStyle = (style) => {
        const newStyles = { ...selectionStyles };
        newStyles[style] = !newStyles[style];
        setSelectionStyles(newStyles);

        applyStyle(style, newStyles[style] ? "false" : "true");
    };

    return (
        <div className={s.wrap}>
            <div className={s.wrap__80}>
                <div className={s.wrap__mid}>
                    <h1>Политика конфиденциальности</h1>
                </div>
                <div className={s.lol}>
                    <div className={s.ggg}>

                        <FormatAlignLeft className={`${s.edit} ${checkStyle("left")}`} style={{ fontSize: 40 }} onClick={() => toggleStyle("justifyLeft")} />
                        <FormatAlignCenter className={`${s.edit} ${checkStyle("center")}`} style={{ fontSize: 40 }} onClick={() => toggleStyle("justifyCenter")} />
                        <FormatAlignRight className={`${s.edit} ${checkStyle("right")}`} style={{ fontSize: 40 }} onClick={() => toggleStyle("justifyRight")} />
                        <div className={s.line1}></div>
                        <FormatBold className={`${s.edit} ${checkStyle("bold")}`} style={{ fontSize: 40 }} onClick={() => toggleStyle("bold")} />
                        <FormatItalic className={`${s.edit} ${checkStyle("italic")}`} style={{ fontSize: 40 }} onClick={() => toggleStyle("italic")} />
                        <FormatUnderlined className={`${s.edit} ${checkStyle("underlined")}`} style={{ fontSize: 40 }} onClick={() => toggleStyle("underline")} />
                        <div className={s.line2}></div>
                        <div className={s.coloredit}>
                            <input type="color" name="" id="" onChange={(e)=>{setColor(e.target.value);toggleColor()}} className={s.colortype} />
                            <FormatColorFill className={`${s.edit} ${checkStyle("color")}`} style={{ fontSize: 40 }} onClick={toggleColor} />
                        </div>
                        <div className={s.text}>
                            <FormatSize className={`${s.edit} ${checkStyle("fontsize")}`} style={{ fontSize: 40 }} onClick={() => {
                                
                                setTextEdit(!textedit)
                                
                                
                                }} />
                        </div>
                    </div>
                    <div className={s.text__editing}>
                        <p id="ahhahah" contentEditable>Поменяй упхкхпкхкухпкхх</p>
                    </div>
                </div>
            </div>
            {
                !textedit?null:
                <PortalModalRootWS>
                        <div className={s.text_vib}>
                            <input type="number" name="" id="" onChange={(e)=>{applyStyle("fontsize",e.target.value + "px");toggleFont()}} />
                        </div>
                </PortalModalRootWS>
            }
        </div>
    );
};

export default Police;
