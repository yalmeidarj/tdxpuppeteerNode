import re

def clean_data(html):
    # Extracting option elements using regular expression
    options = re.findall(r'<option value="(\d+)" label="([^"]+)">', html)

    # Creating a dictionary where value options are keys and the values are the labels
    # cleaned_data = {value: label for value, label in options}

    # Creating a dictionary where the labels are keys and the values are the values
    cleaned_data = {label: value for value, label in options}

    return cleaned_data


html_data = """
<select ng-change="reloadData()" ng-model="selectedCLLI" ng-options="item.value as item.label for item in accountList.cllis | orderBy:'value'" class="ng-valid ng-touched ng-dirty ng-valid-parse">
<option value="0" selected="selected" label="CLLI">CLLI</option>
<option value="1" label="ALTOON41_2012A">ALTOON41_2012A</option>
<option value="2" label="ALTOON41_3013C">ALTOON41_3013C</option><option value="3" label="ALTOON41_3023B">ALTOON41_3023B</option><option value="4" label="ALTOON41_3041A">ALTOON41_3041A</option><option value="5" label="ALTOON41_4021A">ALTOON41_4021A</option><option value="6" label="ANCSON04_1931A">ANCSON04_1931A</option><option value="7" label="AURRON91_3031A">AURRON91_3031A</option><option value="8" label="BARION18_1891A">BARION18_1891A</option><option value="9" label="BARION18_4022AA">BARION18_4022AA</option><option value="10" label="BARION18_4342A">BARION18_4342A</option><option value="11" label="BLNHON15_1011A">BLNHON15_1011A</option><option value="12" label="BLNHON15_1013A">BLNHON15_1013A</option><option value="13" label="BLNHON15_3012A">BLNHON15_3012A</option><option value="14" label="BLRVON02_1613A">BLRVON02_1613A</option><option value="15" label="BLRVON02_3611A">BLRVON02_3611A</option><option value="16" label="BLRVON02_3613A">BLRVON02_3613A</option><option value="17" label="BLRVON02_3621A">BLRVON02_3621A</option><option value="18" label="BLRVON02_3634A">BLRVON02_3634A</option><option value="19" label="BMTNON37_2712A">BMTNON37_2712A</option><option value="20" label="BMVLON08_1014B">BMVLON08_1014B</option><option value="21" label="BRKLON97_1802A">BRKLON97_1802A</option><option value="22" label="BRKLON97_3021A">BRKLON97_3021A</option><option value="23" label="BRKLON97_3024A">BRKLON97_3024A</option><option value="24" label="BRKLON97_3032A">BRKLON97_3032A</option><option value="25" label="BRKLON97_3611A">BRKLON97_3611A</option><option value="26" label="BRKLON97_3612A">BRKLON97_3612A</option><option value="27" label="BRKLON97_3811A">BRKLON97_3811A</option><option value="28" label="BRKLON97_4601A">BRKLON97_4601A</option><option value="29" label="BRKLON97_4604A">BRKLON97_4604A</option><option value="30" label="BRKLON97_4821D">BRKLON97_4821D</option><option value="31" label="BURLON02_2026A">BURLON02_2026A</option><option value="32" label="BURLON02_2061B">BURLON02_2061B</option><option value="33" label="BURLON02_2093A">BURLON02_2093A</option><option value="34" label="BURLON03_1061A">BURLON03_1061A</option><option value="35" label="CALDON28_3801A">CALDON28_3801A</option><option value="36" label="CPBDON20_2841A">CPBDON20_2841A</option><option value="37" label="CPBDON20_2871A">CPBDON20_2871A</option><option value="38" label="DNDSON12_1821AA">DNDSON12_1821AA</option><option value="39" label="DNDSON12_1821AAA">DNDSON12_1821AAA</option><option value="40" label="DNDSON12_1921AA">DNDSON12_1921AA</option><option value="41" label="ELVAON01_3831B">ELVAON01_3831B</option><option value="42" label="ELVAON01_3841A">ELVAON01_3841A</option><option value="43" label="EMVLON52_2621A">EMVLON52_2621A</option><option value="44" label="EMVLON52_3611A">EMVLON52_3611A</option><option value="45" label="ESSXON03_2011A">ESSXON03_2011A</option><option value="46" label="ESSXON03_2011B">ESSXON03_2011B</option><option value="47" label="ESSXON03_3021A">ESSXON03_3021A</option><option value="48" label="ESSXON03_3043A">ESSXON03_3043A</option><option value="49" label="ESSXON03_4012A">ESSXON03_4012A</option><option value="50" label="ESSXON03_4021A">ESSXON03_4021A</option><option value="51" label="ETLKON02_3133A">ETLKON02_3133A</option><option value="52" label="GALTON04_2861A">GALTON04_2861A</option><option value="53" label="GLPHON22_1062A">GLPHON22_1062A</option><option value="54" label="GMLYON20_1021A">GMLYON20_1021A</option><option value="55" label="GMLYON20_3011A">GMLYON20_3011A</option><option value="56" label="GMLYON20_3112A">GMLYON20_3112A</option><option value="57" label="GMLYON20_3115A">GMLYON20_3115A</option><option value="58" label="GMLYON20_3122A">GMLYON20_3122A</option><option value="59" label="GMLYON20_3131A">GMLYON20_3131A</option><option value="60" label="GMLYON20_3191A">GMLYON20_3191A</option><option value="61" label="GMLYON20_3831A">GMLYON20_3831A</option><option value="62" label="GMLYON20_3836A">GMLYON20_3836A</option><option value="63" label="HMPNON67_1811A">HMPNON67_1811A</option><option value="64" label="HMPNON67_1822AA">HMPNON67_1822AA</option><option value="65" label="HMTNON02_3033A">HMTNON02_3033A</option><option value="66" label="HMTNON02_3045A">HMTNON02_3045A</option><option value="67" label="HMTNON02_3046A">HMTNON02_3046A</option><option value="68" label="HMTNON02_3113A">HMTNON02_3113A</option><option value="69" label="HMTNON02_4051A">HMTNON02_4051A</option><option value="70" label="HMTNON02_4062A">HMTNON02_4062A</option><option value="71" label="HMTNON02_4085A">HMTNON02_4085A</option><option value="72" label="HMTNON02_4222A">HMTNON02_4222A</option><option value="73" label="HMTNON02_4224A">HMTNON02_4224A</option><option value="74" label="HMTNON14_1322A">HMTNON14_1322A</option><option value="75" label="HMTNON14_1522A">HMTNON14_1522A</option><option value="76" label="HMTNON14_5123B">HMTNON14_5123B</option><option value="77" label="HMTNON14_5132A">HMTNON14_5132A</option><option value="78" label="HMTNON14_7101A">HMTNON14_7101A</option><option value="79" label="HMTNON14_7221A">HMTNON14_7221A</option><option value="80" label="HMTNON14_7232A">HMTNON14_7232A</option><option value="81" label="HMTNON14_7422A">HMTNON14_7422A</option><option value="82" label="HRRWON04_1012A">HRRWON04_1012A</option><option value="83" label="JKVLON05_1043A">JKVLON05_1043A</option><option value="84" label="JKVLON05_1043B">JKVLON05_1043B</option><option value="85" label="JKVLON05_1059A">JKVLON05_1059A</option><option value="86" label="KGCYON87_3611CC">KGCYON87_3611CC</option><option value="87" label="KGVLON05_4802A">KGVLON05_4802A</option><option value="88" label="KNBGON21_1811A">KNBGON21_1811A</option><option value="89" label="KNBGON21_1851B">KNBGON21_1851B</option><option value="90" label="KNBGON21_2011A">KNBGON21_2011A</option><option value="91" label="KNTAON16_2321A">KNTAON16_2321A</option><option value="92" label="KTNRON06_3161B">KTNRON06_3161B</option><option value="93" label="KTNRON06_3704A">KTNRON06_3704A</option><option value="94" label="KTNRON06_3709A">KTNRON06_3709A</option><option value="95" label="KTNRON06_3723A">KTNRON06_3723A</option><option value="96" label="KTNRON06_3911A">KTNRON06_3911A</option><option value="97" label="KTNRON06_3942C">KTNRON06_3942C</option><option value="98" label="KTNRON06_3951C">KTNRON06_3951C</option><option value="99" label="KTNRON06_3961B">KTNRON06_3961B</option><option value="100" label="KTNRON06_3972A">KTNRON06_3972A</option><option value="101" label="KTNRON06_3983A">KTNRON06_3983A</option><option value="102" label="KTNRON08_4101A">KTNRON08_4101A</option><option value="103" label="LMTNON07_2011A">LMTNON07_2011A</option><option value="104" label="LMTNON07_2012A">LMTNON07_2012A</option><option value="105" label="LMTNON07_2013A">LMTNON07_2013A</option><option value="106" label="LMTNON07_4013A">LMTNON07_4013A</option><option value="107" label="LONDON14_1032A">LONDON14_1032A</option><option value="108" label="LONDON14_1042A">LONDON14_1042A</option><option value="109" label="LONDON14_1071A">LONDON14_1071A</option><option value="110" label="LONDON14_1083A">LONDON14_1083A</option><option value="111" label="LONDON14_1091A">LONDON14_1091A</option><option value="112" label="LONDON14_1095A">LONDON14_1095A</option><option value="113" label="LONDON14_1111D">LONDON14_1111D</option><option value="114" label="LONDON14_1121A">LONDON14_1121A</option><option value="115" label="LONDON14_1223B">LONDON14_1223B</option><option value="116" label="LONDON14_1241B">LONDON14_1241B</option><option value="117" label="LONDON14_1244A">LONDON14_1244A</option><option value="118" label="LONDON14_1291B">LONDON14_1291B</option><option value="119" label="LONDON14_1316A">LONDON14_1316A</option><option value="120" label="LONDON14_1372A">LONDON14_1372A</option><option value="121" label="LONDON14_2073C">LONDON14_2073C</option><option value="122" label="MAPLON23_1102B">MAPLON23_1102B</option><option value="123" label="MAPLON23_1133A">MAPLON23_1133A</option><option value="124" label="MAPLON23_2035A">MAPLON23_2035A</option><option value="125" label="MAPLON23_2041A">MAPLON23_2041A</option><option value="126" label="MAPLON23_2061A">MAPLON23_2061A</option><option value="127" label="MAPLON23_2062A">MAPLON23_2062A</option><option value="128" label="MAPLON23_3311A">MAPLON23_3311A</option><option value="129" label="MAPLON23_3312A">MAPLON23_3312A</option><option value="130" label="MAPLON23_3314B">MAPLON23_3314B</option><option value="131" label="MAPLON23_3401A">MAPLON23_3401A</option><option value="132" label="MAPLON23_3401B">MAPLON23_3401B</option><option value="133" label="MAPLON23_3401C">MAPLON23_3401C</option><option value="134" label="MLTNON25_4504A">MLTNON25_4504A</option><option value="135" label="MNSTON31_3681AA">MNSTON31_3681AA</option><option value="136" label="MNSTON31_3692A">MNSTON31_3692A</option><option value="137" label="MRHMON24_2811A">MRHMON24_2811A</option><option value="138" label="NOTLON09_1016A">NOTLON09_1016A</option><option value="139" label="NRBAON24_2821A">NRBAON24_2821A</option><option value="140" label="NWMKON85_1034A">NWMKON85_1034A</option><option value="141" label="ORLNON06_2173A">ORLNON06_2173A</option><option value="142" label="ORLNON06_3641A">ORLNON06_3641A</option><option value="143" label="OSHWON95_1171A">OSHWON95_1171A</option><option value="144" label="OSHWON95_1251A">OSHWON95_1251A</option><option value="145" label="OSHWON95_1261A">OSHWON95_1261A</option><option value="146" label="OSHWON95_2801C">OSHWON95_2801C</option><option value="147" label="OTWAON01_5041A">OTWAON01_5041A</option><option value="148" label="OTWAON10_2422A">OTWAON10_2422A</option><option value="149" label="OTWAON10_5111A">OTWAON10_5111A</option><option value="150" label="PCNGON62_1011A">PCNGON62_1011A</option><option value="151" label="PCNGON62_1021B">PCNGON62_1021B</option><option value="152" label="PCNGON62_1106A">PCNGON62_1106A</option><option value="153" label="PCNGON62_1109A">PCNGON62_1109A</option><option value="154" label="PLGVON53_1831A">PLGVON53_1831A</option><option value="155" label="PLGVON53_1832A">PLGVON53_1832A</option><option value="156" label="PLGVON53_3011A">PLGVON53_3011A</option><option value="157" label="PWSNON31_2801A">PWSNON31_2801A</option><option value="158" label="PWSNON31_4801A">PWSNON31_4801A</option><option value="159" label="PWSNON31_4812A">PWSNON31_4812A</option><option value="160" label="RMHLON34_3015B">RMHLON34_3015B</option><option value="161" label="RMHLON34_3025B">RMHLON34_3025B</option><option value="162" label="RMHLON34_3051A">RMHLON34_3051A</option><option value="163" label="RMHLON34_3101A">RMHLON34_3101A</option><option value="164" label="RMHLON34_3206A">RMHLON34_3206A</option><option value="165" label="SFVLON28_1033A">SFVLON28_1033A</option><option value="166" label="SFVLON28_3506A">SFVLON28_3506A</option><option value="167" label="SFVLON28_3508A">SFVLON28_3508A</option><option value="168" label="SFVLON34_1032A">SFVLON34_1032A</option><option value="169" label="SFVLON34_1033B">SFVLON34_1033B</option><option value="170" label="STCTON10_1771B">STCTON10_1771B</option><option value="171" label="STRDON29_4812A">STRDON29_4812A</option><option value="172" label="STTNON82_1031A">STTNON82_1031A</option><option value="173" label="STTNON82_1042A">STTNON82_1042A</option><option value="174" label="STTNON82_1042AA">STTNON82_1042AA</option><option value="175" label="STTNON82_1051A">STTNON82_1051A</option><option value="176" label="STTNON82_1201A">STTNON82_1201A</option><option value="177" label="STTNON82_1211AA">STTNON82_1211AA</option><option value="178" label="STTNON82_2601A">STTNON82_2601A</option><option value="179" label="TCMSON20_2121A">TCMSON20_2121A</option><option value="180" label="TNHLON40_1021A">TNHLON40_1021A</option><option value="181" label="TNHLON40_3024A">TNHLON40_3024A</option><option value="182" label="TNHLON40_3101A">TNHLON40_3101A</option><option value="183" label="TNHLON40_3102A">TNHLON40_3102A</option><option value="184" label="TNHLON40_3104A">TNHLON40_3104A</option><option value="185" label="TNHLON40_4041A">TNHLON40_4041A</option><option value="186" label="TNHLON40_4043A">TNHLON40_4043A</option><option value="187" label="TNHLON40_4081A">TNHLON40_4081A</option><option value="188" label="TNHLON40_4121A">TNHLON40_4121A</option><option value="189" label="TNHLON40_4122A">TNHLON40_4122A</option><option value="190" label="TNHLON40_4212A">TNHLON40_4212A</option><option value="191" label="TNHLON40_4252A">TNHLON40_4252A</option><option value="192" label="TNHLON40_4261A">TNHLON40_4261A</option><option value="193" label="UNVLON55_1052A">UNVLON55_1052A</option><option value="194" label="VCTAON41_1020A">VCTAON41_1020A</option><option value="195" label="VCTAON41_1811A">VCTAON41_1811A</option><option value="196" label="WDBGON48_2111A">WDBGON48_2111A</option><option value="197" label="WDBGON48_2201B">WDBGON48_2201B</option><option value="198" label="WNDSON13_3123A">WNDSON13_3123A</option><option value="199" label="WNPGMB06_101-7">WNPGMB06_101-7</option><option value="200" label="WNPGMB06_401-2">WNPGMB06_401-2</option><option value="201" label="WNPGMB06_406-1">WNPGMB06_406-1</option><option value="202" label="WTBYON94_2013A">WTBYON94_2013A</option><option value="203" label="WTBYON94_2013B">WTBYON94_2013B</option><option value="204" label="WTBYON94_2044A">WTBYON94_2044A</option><option value="205" label="WTBYON94_2051C">WTBYON94_2051C</option><option value="206" label="WTBYON94_3013B">WTBYON94_3013B</option><option value="207" label="WTBYON94_3064A">WTBYON94_3064A</option></select>

"""

# Clean the data
cleaned_data = clean_data(html_data)
print(cleaned_data)
