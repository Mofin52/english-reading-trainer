import React from 'react'
import {connect} from "react-redux";
import {changeLang} from "../../actions";
import i18n from "i18next";

const Tranzlator = ({locale, switchLang}) => (
        <div className="Tranzlator" style={{width: "100%"}} onClick={() => switchLang(locale.value)}>
            {
                locale.value === 'en' ?
                    <img src="https://emojio.ru/images/apple-b/1f1f7-1f1fa.png" width="30px" height="25px" alt="rus"
                         align="right"/>
                    :
                    <img src="http://s1.iconbird.com/ico/0512/LanguageFlags/file1336842708.png" width="30px"
                         height="25px"
                         alt="en" align="right"/>
            }
        </div>
);

const mapStateToProps = (state) => (
    {
        locale: state.locale
    });

const mapDispatchToProps = (dispatch) => {
    return {
        switchLang: (lng) => {
            i18n.changeLanguage(lng);
            dispatch(changeLang());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tranzlator);
