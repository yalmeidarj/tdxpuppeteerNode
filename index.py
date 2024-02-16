import requests
import re
import json



def clean_data(html):
    # Extracting option elements using regular expression
    options = re.findall(r'<option value="(\d+)" label="([^"]+)">', html)

    # Creating a dictionary where value options are keys and the values are the labels
    # cleaned_data = {value: label for value, label in options}

    # Creating a dictionary where the labels are keys and the values are the values
    cleaned_data = {label: value for value, label in options}

    return cleaned_data

second_html_data = """
<select ng-change="reloadData()" ng-model="selectedCLLI" ng-options="item.value as item.label for item in accountList.cllis | orderBy:'value'" class="ng-pristine ng-valid ng-touched"><option value="0" selected="selected" label="CLLI">CLLI</option><option value="1" label="ALTOON41_2012A">ALTOON41_2012A</option><option value="2" label="ALTOON41_3013C">ALTOON41_3013C</option><option value="3" label="ALTOON41_3023B">ALTOON41_3023B</option><option value="4" label="ALTOON41_3041A">ALTOON41_3041A</option><option value="5" label="ALTOON41_4021A">ALTOON41_4021A</option><option value="6" label="ANCSON04_1931A">ANCSON04_1931A</option><option value="7" label="AURRON91_3031A">AURRON91_3031A</option><option value="8" label="BARION18_1891A">BARION18_1891A</option><option value="9" label="BARION18_4022AA">BARION18_4022AA</option><option value="10" label="BARION18_4342A">BARION18_4342A</option><option value="11" label="BLNHON15_1011A">BLNHON15_1011A</option><option value="12" label="BLNHON15_1013A">BLNHON15_1013A</option><option value="13" label="BLNHON15_3012A">BLNHON15_3012A</option><option value="14" label="BLRVON02_1613A">BLRVON02_1613A</option><option value="15" label="BLRVON02_3611A">BLRVON02_3611A</option><option value="16" label="BLRVON02_3613A">BLRVON02_3613A</option><option value="17" label="BLRVON02_3621A">BLRVON02_3621A</option><option value="18" label="BLRVON02_3634A">BLRVON02_3634A</option><option value="19" label="BMTNON37_2712A">BMTNON37_2712A</option><option value="20" label="BMVLON08_1014B">BMVLON08_1014B</option><option value="21" label="BMVLON08_1111B">BMVLON08_1111B</option><option value="22" label="BRKLON97_1802A">BRKLON97_1802A</option><option value="23" label="BRKLON97_3021A">BRKLON97_3021A</option><option value="24" label="BRKLON97_3024A">BRKLON97_3024A</option><option value="25" label="BRKLON97_3032A">BRKLON97_3032A</option><option value="26" label="BRKLON97_3611A">BRKLON97_3611A</option><option value="27" label="BRKLON97_3612A">BRKLON97_3612A</option><option value="28" label="BRKLON97_3811A">BRKLON97_3811A</option><option value="29" label="BRKLON97_4601A">BRKLON97_4601A</option><option value="30" label="BRKLON97_4604A">BRKLON97_4604A</option><option value="31" label="BRKLON97_4821D">BRKLON97_4821D</option><option value="32" label="BURLON02_2026A">BURLON02_2026A</option><option value="33" label="BURLON02_2061B">BURLON02_2061B</option><option value="34" label="BURLON02_2093A">BURLON02_2093A</option><option value="35" label="BURLON03_1061A">BURLON03_1061A</option><option value="36" label="CALDON28_3801A">CALDON28_3801A</option><option value="37" label="CPBDON20_2841A">CPBDON20_2841A</option><option value="38" label="CPBDON20_2871A">CPBDON20_2871A</option><option value="39" label="DNDSON12_1821AA">DNDSON12_1821AA</option><option value="40" label="DNDSON12_1821AAA">DNDSON12_1821AAA</option><option value="41" label="DNDSON12_1921AA">DNDSON12_1921AA</option><option value="42" label="ELVAON01_3831B">ELVAON01_3831B</option><option value="43" label="ELVAON01_3841A">ELVAON01_3841A</option><option value="44" label="EMVLON52_2621A">EMVLON52_2621A</option><option value="45" label="EMVLON52_3611A">EMVLON52_3611A</option><option value="46" label="ESSXON03_2011A">ESSXON03_2011A</option><option value="47" label="ESSXON03_2011B">ESSXON03_2011B</option><option value="48" label="ESSXON03_3021A">ESSXON03_3021A</option><option value="49" label="ESSXON03_3043A">ESSXON03_3043A</option><option value="50" label="ESSXON03_4012A">ESSXON03_4012A</option><option value="51" label="ESSXON03_4021A">ESSXON03_4021A</option><option value="52" label="ETLKON02_3133A">ETLKON02_3133A</option><option value="53" label="GALTON04_2861A">GALTON04_2861A</option><option value="54" label="GLPHON22_1062A">GLPHON22_1062A</option><option value="55" label="GMLYON20_1021A">GMLYON20_1021A</option><option value="56" label="GMLYON20_3011A">GMLYON20_3011A</option><option value="57" label="GMLYON20_3112A">GMLYON20_3112A</option><option value="58" label="GMLYON20_3115A">GMLYON20_3115A</option><option value="59" label="GMLYON20_3122A">GMLYON20_3122A</option><option value="60" label="GMLYON20_3131A">GMLYON20_3131A</option><option value="61" label="GMLYON20_3191A">GMLYON20_3191A</option><option value="62" label="GMLYON20_3831A">GMLYON20_3831A</option><option value="63" label="GMLYON20_3836A">GMLYON20_3836A</option><option value="64" label="HMPNON67_1811A">HMPNON67_1811A</option><option value="65" label="HMPNON67_1822AA">HMPNON67_1822AA</option><option value="66" label="HMTNON02_3033A">HMTNON02_3033A</option><option value="67" label="HMTNON02_3045A">HMTNON02_3045A</option><option value="68" label="HMTNON02_3046A">HMTNON02_3046A</option><option value="69" label="HMTNON02_3113A">HMTNON02_3113A</option><option value="70" label="HMTNON02_4051A">HMTNON02_4051A</option><option value="71" label="HMTNON02_4062A">HMTNON02_4062A</option><option value="72" label="HMTNON02_4085A">HMTNON02_4085A</option><option value="73" label="HMTNON02_4222A">HMTNON02_4222A</option><option value="74" label="HMTNON02_4224A">HMTNON02_4224A</option><option value="75" label="HMTNON14_1322A">HMTNON14_1322A</option><option value="76" label="HMTNON14_1522A">HMTNON14_1522A</option><option value="77" label="HMTNON14_1711A">HMTNON14_1711A</option><option value="78" label="HMTNON14_3311A">HMTNON14_3311A</option><option value="79" label="HMTNON14_3316A">HMTNON14_3316A</option><option value="80" label="HMTNON14_5123B">HMTNON14_5123B</option><option value="81" label="HMTNON14_5132A">HMTNON14_5132A</option><option value="82" label="HMTNON14_7101A">HMTNON14_7101A</option><option value="83" label="HMTNON14_7221A">HMTNON14_7221A</option><option value="84" label="HMTNON14_7232A">HMTNON14_7232A</option><option value="85" label="HMTNON14_7422A">HMTNON14_7422A</option><option value="86" label="HRRWON04_1012A">HRRWON04_1012A</option><option value="87" label="JKVLON05_1043A">JKVLON05_1043A</option><option value="88" label="JKVLON05_1043B">JKVLON05_1043B</option><option value="89" label="JKVLON05_1059A">JKVLON05_1059A</option><option value="90" label="KGCYON87_3611CC">KGCYON87_3611CC</option><option value="91" label="KGVLON05_4802A">KGVLON05_4802A</option><option value="92" label="KNBGON21_1811A">KNBGON21_1811A</option><option value="93" label="KNBGON21_1851B">KNBGON21_1851B</option><option value="94" label="KNBGON21_2011A">KNBGON21_2011A</option><option value="95" label="KNTAON16_2321A">KNTAON16_2321A</option><option value="96" label="KTNRON06_3161B">KTNRON06_3161B</option><option value="97" label="KTNRON06_3704A">KTNRON06_3704A</option><option value="98" label="KTNRON06_3709A">KTNRON06_3709A</option><option value="99" label="KTNRON06_3723A">KTNRON06_3723A</option><option value="100" label="KTNRON06_3911A">KTNRON06_3911A</option><option value="101" label="KTNRON06_3942C">KTNRON06_3942C</option><option value="102" label="KTNRON06_3951C">KTNRON06_3951C</option><option value="103" label="KTNRON06_3961B">KTNRON06_3961B</option><option value="104" label="KTNRON06_3972A">KTNRON06_3972A</option><option value="105" label="KTNRON06_3983A">KTNRON06_3983A</option><option value="106" label="KTNRON08_4101A">KTNRON08_4101A</option><option value="107" label="LMTNON07_2011A">LMTNON07_2011A</option><option value="108" label="LMTNON07_2012A">LMTNON07_2012A</option><option value="109" label="LMTNON07_2013A">LMTNON07_2013A</option><option value="110" label="LMTNON07_4013A">LMTNON07_4013A</option><option value="111" label="LONDON14_1032A">LONDON14_1032A</option><option value="112" label="LONDON14_1042A">LONDON14_1042A</option><option value="113" label="LONDON14_1071A">LONDON14_1071A</option><option value="114" label="LONDON14_1083A">LONDON14_1083A</option><option value="115" label="LONDON14_1091A">LONDON14_1091A</option><option value="116" label="LONDON14_1095A">LONDON14_1095A</option><option value="117" label="LONDON14_1111D">LONDON14_1111D</option><option value="118" label="LONDON14_1121A">LONDON14_1121A</option><option value="119" label="LONDON14_1223B">LONDON14_1223B</option><option value="120" label="LONDON14_1241B">LONDON14_1241B</option><option value="121" label="LONDON14_1244A">LONDON14_1244A</option><option value="122" label="LONDON14_1291B">LONDON14_1291B</option><option value="123" label="LONDON14_1316A">LONDON14_1316A</option><option value="124" label="LONDON14_1372A">LONDON14_1372A</option><option value="125" label="LONDON14_2073C">LONDON14_2073C</option><option value="126" label="MAPLON23_1102B">MAPLON23_1102B</option><option value="127" label="MAPLON23_1133A">MAPLON23_1133A</option><option value="128" label="MAPLON23_2035A">MAPLON23_2035A</option><option value="129" label="MAPLON23_2041A">MAPLON23_2041A</option><option value="130" label="MAPLON23_2061A">MAPLON23_2061A</option><option value="131" label="MAPLON23_2062A">MAPLON23_2062A</option><option value="132" label="MAPLON23_3311A">MAPLON23_3311A</option><option value="133" label="MAPLON23_3312A">MAPLON23_3312A</option><option value="134" label="MAPLON23_3314B">MAPLON23_3314B</option><option value="135" label="MAPLON23_3401A">MAPLON23_3401A</option><option value="136" label="MAPLON23_3401B">MAPLON23_3401B</option><option value="137" label="MAPLON23_3401C">MAPLON23_3401C</option><option value="138" label="MLTNON25_4504A">MLTNON25_4504A</option><option value="139" label="MNSTON31_3681AA">MNSTON31_3681AA</option><option value="140" label="MNSTON31_3692A">MNSTON31_3692A</option><option value="141" label="MRHMON24_2811A">MRHMON24_2811A</option><option value="142" label="NOTLON09_1016A">NOTLON09_1016A</option><option value="143" label="NRBAON24_1811A">NRBAON24_1811A</option><option value="144" label="NRBAON24_2821A">NRBAON24_2821A</option><option value="145" label="NWMKON85_1034A">NWMKON85_1034A</option><option value="146" label="ORLNON06_2173A">ORLNON06_2173A</option><option value="147" label="ORLNON06_3641A">ORLNON06_3641A</option><option value="148" label="OSHWON95_1171A">OSHWON95_1171A</option><option value="149" label="OSHWON95_1251A">OSHWON95_1251A</option><option value="150" label="OSHWON95_1261A">OSHWON95_1261A</option><option value="151" label="OSHWON95_2801C">OSHWON95_2801C</option><option value="152" label="OTWAON01_5041A">OTWAON01_5041A</option><option value="153" label="OTWAON10_2422A">OTWAON10_2422A</option><option value="154" label="OTWAON10_5111A">OTWAON10_5111A</option><option value="155" label="PCNGON62_1011A">PCNGON62_1011A</option><option value="156" label="PCNGON62_1021B">PCNGON62_1021B</option><option value="157" label="PCNGON62_1031A">PCNGON62_1031A</option><option value="158" label="PCNGON62_1061A">PCNGON62_1061A</option><option value="159" label="PCNGON62_1063A">PCNGON62_1063A</option><option value="160" label="PCNGON62_1106A">PCNGON62_1106A</option><option value="161" label="PCNGON62_1109A">PCNGON62_1109A</option><option value="162" label="PCNGON62_1112A">PCNGON62_1112A</option><option value="163" label="PLGVON53_1831A">PLGVON53_1831A</option><option value="164" label="PLGVON53_1832A">PLGVON53_1832A</option><option value="165" label="PLGVON53_3011A">PLGVON53_3011A</option><option value="166" label="PWSNON31_2801A">PWSNON31_2801A</option><option value="167" label="PWSNON31_4801A">PWSNON31_4801A</option><option value="168" label="PWSNON31_4812A">PWSNON31_4812A</option><option value="169" label="RMHLON34_3015B">RMHLON34_3015B</option><option value="170" label="RMHLON34_3025B">RMHLON34_3025B</option><option value="171" label="RMHLON34_3051A">RMHLON34_3051A</option><option value="172" label="RMHLON34_3101A">RMHLON34_3101A</option><option value="173" label="RMHLON34_3206A">RMHLON34_3206A</option><option value="174" label="SFVLON28_1033A">SFVLON28_1033A</option><option value="175" label="SFVLON28_3506A">SFVLON28_3506A</option><option value="176" label="SFVLON28_3508A">SFVLON28_3508A</option><option value="177" label="SFVLON34_1032A">SFVLON34_1032A</option><option value="178" label="SFVLON34_1033B">SFVLON34_1033B</option><option value="179" label="SSVLON39_1521A">SSVLON39_1521A</option><option value="180" label="SSVLON39_3021A">SSVLON39_3021A</option><option value="181" label="STCTON10_1771B">STCTON10_1771B</option><option value="182" label="STRDON29_4812A">STRDON29_4812A</option><option value="183" label="STTNON82_1031A">STTNON82_1031A</option><option value="184" label="STTNON82_1042A">STTNON82_1042A</option><option value="185" label="STTNON82_1042AA">STTNON82_1042AA</option><option value="186" label="STTNON82_1051A">STTNON82_1051A</option><option value="187" label="STTNON82_1201A">STTNON82_1201A</option><option value="188" label="STTNON82_1211AA">STTNON82_1211AA</option><option value="189" label="STTNON82_2601A">STTNON82_2601A</option><option value="190" label="TCMSON20_2121A">TCMSON20_2121A</option><option value="191" label="TNHLON40_1021A">TNHLON40_1021A</option><option value="192" label="TNHLON40_3024A">TNHLON40_3024A</option><option value="193" label="TNHLON40_3101A">TNHLON40_3101A</option><option value="194" label="TNHLON40_3102A">TNHLON40_3102A</option><option value="195" label="TNHLON40_3103A">TNHLON40_3103A</option><option value="196" label="TNHLON40_3104A">TNHLON40_3104A</option><option value="197" label="TNHLON40_4021A">TNHLON40_4021A</option><option value="198" label="TNHLON40_4041A">TNHLON40_4041A</option><option value="199" label="TNHLON40_4043A">TNHLON40_4043A</option><option value="200" label="TNHLON40_4081A">TNHLON40_4081A</option><option value="201" label="TNHLON40_4101A">TNHLON40_4101A</option><option value="202" label="TNHLON40_4111A">TNHLON40_4111A</option><option value="203" label="TNHLON40_4121A">TNHLON40_4121A</option><option value="204" label="TNHLON40_4122A">TNHLON40_4122A</option><option value="205" label="TNHLON40_4162A">TNHLON40_4162A</option><option value="206" label="TNHLON40_4212A">TNHLON40_4212A</option><option value="207" label="TNHLON40_4252A">TNHLON40_4252A</option><option value="208" label="TNHLON40_4261A">TNHLON40_4261A</option><option value="209" label="TRCKON40_1601A">TRCKON40_1601A</option><option value="210" label="TRCKON40_1601AA">TRCKON40_1601AA</option><option value="211" label="TRCKON40_1801A">TRCKON40_1801A</option><option value="212" label="TRCKON40_1801AA">TRCKON40_1801AA</option><option value="213" label="TRCKON40_4801A">TRCKON40_4801A</option><option value="214" label="TRCKON40_4801AA">TRCKON40_4801AA</option><option value="215" label="UNVLON55_1052A">UNVLON55_1052A</option><option value="216" label="VCTAON41_1020A">VCTAON41_1020A</option><option value="217" label="VCTAON41_1811A">VCTAON41_1811A</option><option value="218" label="WDBGON48_2111A">WDBGON48_2111A</option><option value="219" label="WDBGON48_2201B">WDBGON48_2201B</option><option value="220" label="WNDSON13_3123A">WNDSON13_3123A</option><option value="221" label="WNPGMB06_101-7">WNPGMB06_101-7</option><option value="222" label="WNPGMB06_401-2">WNPGMB06_401-2</option><option value="223" label="WNPGMB06_406-1">WNPGMB06_406-1</option><option value="224" label="WTBYON94_2013A">WTBYON94_2013A</option><option value="225" label="WTBYON94_2013B">WTBYON94_2013B</option><option value="226" label="WTBYON94_2044A">WTBYON94_2044A</option><option value="227" label="WTBYON94_2051C">WTBYON94_2051C</option><option value="228" label="WTBYON94_3013B">WTBYON94_3013B</option><option value="229" label="WTBYON94_3064A">WTBYON94_3064A</option></select>
"""
# Clean the data
cleaned_data = clean_data(second_html_data)
print(cleaned_data)

# current_list = [
# "DELANEY DR",
# "DENTON WAY",
# "FOAKES DR",
# "FRENETTE ST",
# "GENNER DR",
# "GOSNELL TERR",
# "GRIFFITHS DR",
# "LEAH CR",
# "NEPTUNE WAY",
# "REA ST",
# "SAFARI CRT",
# "SAYOR DR",
# "SILLETT DR",
# "SIMMS DR",
# "SYKES ST",
# "VALIN ST",
# "WILCE DR",
# "WITHAY DR",
# ]

# fetched_list = [
#     "SAYOR DR",
#     "GRIFFITHS DR",
#     "WILCE DR",
#     "SIMMS DR",
#     "DELANEY DR",
#     "LEAH CR",
#     "WITHAY DR",
#     "GENNER DR",
#     "REA ST",
#     "FOAKES DR",
#     "SYKES ST",
#     "SILLETT DR"
#   ]

# #get the streets in current_list that are not in fetched_list

# streets = [street for street in current_list if street not in fetched_list]

# print(streets)

# arbitrage_bets_strategies = """

# 1. 3-way arbitrage

# 1. 3-way arbitrage: This is the most common form of arbitrage. It involves betting on all 3 outcomes of a game. This is done by placing bets at different bookmakers who are offering different lines. The goal is to guarantee a profit by betting on all possible outcomes of a game. This is also known as a sure bet or miracle bet.
# 1.2. 3-way arbitrage example: Let’s say that the odds for a game are as follows:
# 1.2.1. Team A to win: 2.00
# 1.2.2. Team B to win: 3.00
# 1.2.3. Draw: 4.00
# 1.2.4. If you bet $100 on Team A to win at Bookmaker A, $100 on Team B to win at Bookmaker B, and $100 on a draw at Bookmaker C, you will win $100 regardless of the outcome of the game. Here’s how:
# 1.2.5. If Team A wins, you will win $100 at Bookmaker A. You will lose $100 at Bookmaker B and Bookmaker C, but you will still have a net profit of $100.
# 1.2.6. If Team B wins, you will win $200 at Bookmaker B. You will lose $100 at Bookmaker A and Bookmaker C, but you will still have a net profit of $100.
# 1.2.7. If the game ends in a draw, you will win $300 at Bookmaker C. You will lose $100 at Bookmaker A and Bookmaker B, but you will still have a net profit of $100.
# 1.2.8. The formula for calculating arbitrage percentage is:
# 1.2.9. Arbitrage percentage = 1 / (odds for Team A to win + odds for Team B to win + odds for a draw)
# 1.2.10. Arbitrage percentage = 1 / (2.00 + 3.00 + 4.00)
# 1.2.11. Arbitrage percentage = 1 / 9.00
# 1.2.12. Arbitrage percentage = 0.1111
# 1.2.13. Arbitrage percentage = 11.11%
# If the arbitrage percentage is less than 100%, then an arbitrage opportunity exists. In this example, the arbitrage percentage is 11.11%, which means that an arbitrage opportunity exists.

# 1.10 Example with corner bets
# 1.10.1. Let’s say that the odds for a game are as follows:
# 1.10.2. Over 10.5 corners: 1.90
# 1.10.3. Under 10.5 corners: 1.90
# 1.10.4. If you bet $100 on Over 10.5 corners at Bookmaker A and $100 on Under 10.5 corners at Bookmaker B, you will win $100 regardless of the outcome of the game. Here’s how:
# 1.10.5. If there are more than 10.5 corners, you will win $90 at Bookmaker A. You will lose $100 at Bookmaker B, but you will still have a net profit of $100.
# 1.10.6. If there are less than 10.5 corners, you will win $90 at Bookmaker B. You will lose $100 at Bookmaker A, but you will still have a net profit of $100.
# 1.10.7. The formula for calculating arbitrage percentage is:
# 1.10.8. Arbitrage percentage = 1 / (odds for Over 10.5 corners + odds for Under 10.5 corners)
# 1.10.9. Arbitrage percentage = 1 / (1.90 + 1.90)
# 1.10.10. Arbitrage percentage = 1 / 3.80
# 1.10.11. Arbitrage percentage = 0.2631
# 1.10.12. Arbitrage percentage = 26.31%

# 1.11 Best markets for arbitrage betting
# 1.11.1. The best markets for arbitrage betting are those with only 2 or 3 possible outcomes. The more possible outcomes there are, the harder it is to find arbitrage opportunities.
# 1.11.2. The best markets for arbitrage betting are:
# 1.11.3. 3-way moneyline (1X2)
# 1.11.4. 2-way moneyline (12)
# 1.11.5. 2-way totals (over/under)
# 1.11.6. 2-way handicaps (Asian handicap)
# 1.11.7. 2-way double chance (1X, 12, X2)
# 1.11.8. 2-way draw no bet (1, 2)
# 1.11.9. 2-way half time result (1X, 12, X2)
# 1.11.10. 2-way half time totals (over/under)
# 1.11.11. 2-way half time handicaps (Asian handicap)






# """



# url = "https://api-football-v1.p.rapidapi.com/v3/odds"

# querystring = {"date": "2024-01-19"}
# # querystring = {"league": "624", "season": "2024"}

# headers = {
# 	"X-RapidAPI-Key": "6b3b3ae179msh12092c0b165179fp11063cjsnc52d628c2c4c",
# 	"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
# }

# response = requests.get(url, headers=headers, params=querystring)

# data = response.json()
# # object structure example:
# # {'get': 'odds', 'parameters': {'fixture': '568987'}, # 'errors': [], 'results': 0, 'paging': {'current': 1, # 'total': 1}, 'response': []}

# #print response
# # List of required bet types
# required_bet_types = ["Match Winner", "Home/Away", "Second Half Winner", "Both Teams Score",
# "Double Chance", "First Half Winner"]

# odds_data = {}
# for match in data['response']:
#     league = match["league"]["name"]
#     fixture_id = match["fixture"]["id"]
#     match_date = match["fixture"]["date"]
#     bookmakers = match["bookmakers"]

#     # Initialize a sub-dictionary for each match
#     odds_data[fixture_id] = {
#         "league": league,
#         "date": match_date,
#         "bookmakers": {}
#     }

#     for bookmaker in bookmakers:
#         bookmaker_name = bookmaker["name"]
#         bets = bookmaker["bets"]

#         # Initialize a sub-dictionary for each bookmaker
#         odds_data[fixture_id]["bookmakers"][bookmaker_name] = {}

#         for bet in bets:
#             label = bet["name"]
#             values = bet["values"]

#             # Check if the bet type is one of the required types
#             if label in required_bet_types:
#                 values = bet["values"]

#                 # Store each bet's values in the corresponding bookmaker's dictionary
#                 odds_data[fixture_id]["bookmakers"][bookmaker_name][label] = {
#                     value["value"]: value["odd"] for value in values}

# #  Convert the dictionary to a JSON string
# # json_data = json.dumps(odds_data, indent=4)

# # # Write the JSON string to a file
# # with open("odds_data.json", "w") as json_file:
# #     json_file.write(json_data)


# import json

# mock_data = {
#     "1144914": {
#         "league": "Carioca - 1",
#         "date": "2024-01-17T19:50:00+00:00",
#         "bookmakers": {
#             "Bwin": {
#                 "Match Winner": {
#                     "Home": "1.77",
#                     "Draw": "3.40",
#                     "Away": "4.60"
#                 },
#                 "Home/Away": {
#                     "Home": "1.29",
#                     "Away": "3.30"
#                 },
#                 "Second Half Winner": {
#                     "Home": "2.10",
#                     "Draw": "2.35",
#                     "Away": "4.50"
#                 },
#                 "Both Teams Score": {
#                     "Yes": "2.10",
#                     "No": "1.65"
#                 },
#                 "Double Chance": {
#                     "Home/Draw": "1.18",
#                     "Home/Away": "1.30",
#                     "Draw/Away": "1.98"
#                 },
#                 "First Half Winner": {
#                     "Home": "2.40",
#                     "Draw": "1.98",
#                     "Away": "5.00"
#                 }
#             },
#             "NordicBet": {
#                 "Match Winner": {
#                     "Home": "1.75",
#                     "Draw": "3.50",
#                     "Away": "4.75"
#                 },
#                 "Home/Away": {
#                     "Home": "1.28",
#                     "Away": "3.50"
#                 },
#                 "Second Half Winner": {
#                     "Home": "2.15",
#                     "Draw": "2.35",
#                     "Away": "4.50"
#                 },
#                 "Both Teams Score": {
#                     "Yes": "2.10",
#                     "No": "1.68"
#                 },
#                 "Double Chance": {
#                     "Home/Draw": "1.12",
#                     "Home/Away": "1.25",
#                     "Draw/Away": "2.00"
#                 },
#                 "First Half Winner": {
#                     "Home": "2.45",
#                     "Draw": "2.00",
#                     "Away": "5.00"
#                 }
#             },
#             "10Bet": {
#                 "Match Winner": {
#                     "Home": "1.77",
#                     "Draw": "3.40",
#                     "Away": "4.33"
#                 },
#                 "Home/Away": {
#                     "Home": "1.30",
#                     "Away": "3.20"
#                 },
#                 "Both Teams Score": {
#                     "Yes": "2.05",
#                     "No": "1.65"
#                 },
#                 "Double Chance": {
#                     "Home/Draw": "1.20",
#                     "Home/Away": "1.25",
#                     "Draw/Away": "1.95"
#                 },
#                 "First Half Winner": {
#                     "Home": "2.45",
#                     "Draw": "2.00",
#                     "Away": "4.75"
#                 }
#             },
#             "William Hill": {
#                 "Match Winner": {
#                     "Home": "1.67",
#                     "Draw": "3.30",
#                     "Away": "4.50"
#                 },
#                 "Home/Away": {
#                     "Home": "1.30",
#                     "Away": "3.40"
#                 },
#                 "Second Half Winner": {
#                     "Home": "2.10",
#                     "Draw": "2.20",
#                     "Away": "5.50"
#                 },
#                 "Both Teams Score": {
#                     "Yes": "2.10",
#                     "No": "1.67"
#                 },
#                 "Double Chance": {
#                     "Home/Draw": "1.15",
#                     "Home/Away": "1.30",
#                     "Draw/Away": "2.05"
#                 },
#                 "First Half Winner": {
#                     "Home": "2.40",
#                     "Draw": "2.00",
#                     "Away": "4.75"
#                 }
#             },
#             "Bet365": {
#                 "Match Winner": {
#                     "Home": "1.75",
#                     "Draw": "3.60",
#                     "Away": "4.75"
#                 },
#                 "Home/Away": {
#                     "Home": "1.30",
#                     "Away": "3.40"
#                 },
#                 "Second Half Winner": {
#                     "Home": "2.10",
#                     "Draw": "2.38",
#                     "Away": "4.75"
#                 },
#                 "Both Teams Score": {
#                     "Yes": "2.10",
#                     "No": "1.67"
#                 },
#                 "Double Chance": {
#                     "Home/Draw": "1.18",
#                     "Home/Away": "1.29",
#                     "Draw/Away": "2.00"
#                 },
#                 "First Half Winner": {
#                     "Home": "2.40",
#                     "Draw": "2.05",
#                     "Away": "5.50"
#                 }
#             },
#             "Marathonbet": {
#                 "Match Winner": {
#                     "Home": "1.72",
#                     "Draw": "3.44",
#                     "Away": "4.70"
#                 },
#                 "Second Half Winner": {
#                     "Home": "2.09",
#                     "Draw": "2.34",
#                     "Away": "4.75"
#                 },
#                 "Both Teams Score": {
#                     "Yes": "2.05",
#                     "No": "1.65"
#                 },
#                 "Double Chance": {
#                     "Home/Draw": "1.15",
#                     "Home/Away": "1.26",
#                     "Draw/Away": "1.99"
#                 },
#                 "First Half Winner": {
#                     "Home": "2.31",
#                     "Draw": "2.02",
#                     "Away": "5.30"
#                 }
#             },
#             "Unibet": {
#                 "Match Winner": {
#                     "Home": "1.74",
#                     "Draw": "3.35",
#                     "Away": "4.25"
#                 },
#                 "Home/Away": {
#                     "Home": "1.30",
#                     "Away": "3.30"
#                 },
#                 "Second Half Winner": {
#                     "Home": "2.20",
#                     "Draw": "2.38",
#                     "Away": "4.60"
#                 },
#                 "Both Teams Score": {
#                     "Yes": "2.08",
#                     "No": "1.68"
#                 },
#                 "Double Chance": {
#                     "Home/Draw": "1.17",
#                     "Home/Away": "1.27",
#                     "Draw/Away": "1.96"
#                 },
#                 "First Half Winner": {
#                     "Home": "2.43",
#                     "Draw": "2.08",
#                     "Away": "4.90"
#                 }
#             },
#             "Betfair": {
#                 "Match Winner": {
#                     "Home": "1.80",
#                     "Draw": "3.50",
#                     "Away": "5.80"
#                 },
#                 "Home/Away": {
#                     "Home": "1.30",
#                     "Away": "4.10"
#                 },
#                 "Both Teams Score": {
#                     "Yes": "2.16",
#                     "No": "1.78"
#                 },
#                 "Double Chance": {
#                     "Home/Draw": "1.20",
#                     "Home/Away": "1.37",
#                     "Draw/Away": "2.18"
#                 },
#                 "First Half Winner": {
#                     "Home": "2.52",
#                     "Draw": "2.22",
#                     "Away": "5.70"
#                 }
#             },
#             "Betsson": {
#                 "Match Winner": {
#                     "Home": "1.75",
#                     "Draw": "3.50",
#                     "Away": "4.75"
#                 },
#                 "Home/Away": {
#                     "Home": "1.28",
#                     "Away": "3.50"
#                 },
#                 "Second Half Winner": {
#                     "Home": "2.15",
#                     "Draw": "2.35",
#                     "Away": "4.50"
#                 },
#                 "Both Teams Score": {
#                     "Yes": "2.10",
#                     "No": "1.68"
#                 },
#                 "Double Chance": {
#                     "Home/Draw": "1.12",
#                     "Home/Away": "1.25",
#                     "Draw/Away": "2.00"
#                 },
#                 "First Half Winner": {
#                     "Home": "2.45",
#                     "Draw": "2.00",
#                     "Away": "5.00"
#                 }
#             },
#             "188Bet": {
#                 "Match Winner": {
#                     "Home": "1.72",
#                     "Draw": "3.15",
#                     "Away": "3.95"
#                 },
#                 "Both Teams Score": {
#                     "Yes": "2.16",
#                     "No": "1.65"
#                 }
#             },
#             "Pinnacle": {
#                 "Match Winner": {
#                     "Home": "1.75",
#                     "Draw": "3.42",
#                     "Away": "4.75"
#                 }
#             },
#             "SBO": {
#                 "Match Winner": {
#                     "Home": "1.67",
#                     "Draw": "2.98",
#                     "Away": "4.11"
#                 },
#                 "Double Chance": {
#                     "Home/Draw": "1.03",
#                     "Home/Away": "1.13",
#                     "Draw/Away": "2.06"
#                 },
#                 "First Half Winner": {
#                     "Home": "2.31",
#                     "Draw": "1.91",
#                     "Away": "4.48"
#                 }
#             },
#             "1xBet": {
#                 "Match Winner": {
#                     "Home": "1.74",
#                     "Draw": "3.44",
#                     "Away": "4.70"
#                 },
#                 "Second Half Winner": {
#                     "Home": "2.11",
#                     "Draw": "2.34",
#                     "Away": "4.93"
#                 },
#                 "Both Teams Score": {
#                     "Yes": "2.05",
#                     "No": "1.73"
#                 },
#                 "Double Chance": {
#                     "Home/Draw": "1.15",
#                     "Home/Away": "1.26",
#                     "Draw/Away": "1.99"
#                 },
#                 "First Half Winner": {
#                     "Home": "2.33",
#                     "Draw": "2.02",
#                     "Away": "5.54"
#                 }
#             },
#             "Sportingbet": {
#                 "Match Winner": {
#                     "Home": "1.77",
#                     "Draw": "3.40",
#                     "Away": "4.60"
#                 },
#                 "Both Teams Score": {
#                     "Yes": "2.10",
#                     "No": "1.65"
#                 },
#                 "Double Chance": {
#                     "Home/Draw": "1.18",
#                     "Home/Away": "1.30",
#                     "Draw/Away": "1.98"
#                 }
#             },
#             "Betway": {
#                 "Match Winner": {
#                     "Home": "1.73",
#                     "Draw": "3.40",
#                     "Away": "4.50"
#                 },
#                 "Home/Away": {
#                     "Home": "1.29",
#                     "Away": "3.30"
#                 },
#                 "Second Half Winner": {
#                     "Home": "2.25",
#                     "Draw": "2.30",
#                     "Away": "4.50"
#                 },
#                 "Both Teams Score": {
#                     "Yes": "2.10",
#                     "No": "1.67"
#                 },
#                 "Double Chance": {
#                     "Home/Draw": "1.20",
#                     "Home/Away": "1.30",
#                     "Draw/Away": "2.00"
#                 },
#                 "First Half Winner": {
#                     "Home": "2.38",
#                     "Draw": "2.05",
#                     "Away": "5.25"
#                 }
#             },
#             "Tipico": {
#                 "Match Winner": {
#                     "Home": "1.60",
#                     "Draw": "3.50",
#                     "Away": "5.20"
#                 },
#                 "Home/Away": {
#                     "Home": "1.27",
#                     "Away": "3.40"
#                 },
#                 "Both Teams Score": {
#                     "Yes": "1.93",
#                     "No": "1.75"
#                 },
#                 "Double Chance": {
#                     "Home/Draw": "1.16",
#                     "Home/Away": "1.15",
#                     "Draw/Away": "2.10"
#                 },
#                 "First Half Winner": {
#                     "Home": "2.40",
#                     "Draw": "1.87",
#                     "Away": "5.50"
#                 }
#             },
#             "Betcris": {
#                 "Match Winner": {
#                     "Home": "1.77",
#                     "Draw": "3.45",
#                     "Away": "4.42"
#                 },
#                 "Double Chance": {
#                     "Home/Draw": "1.19",
#                     "Home/Away": "1.27",
#                     "Draw/Away": "1.85"
#                 }
#             },
#             "888Sport": {
#                 "Match Winner": {
#                     "Home": "1.74",
#                     "Draw": "3.35",
#                     "Away": "4.25"
#                 },
#                 "Home/Away": {
#                     "Home": "1.30",
#                     "Away": "3.30"
#                 },
#                 "Second Half Winner": {
#                     "Home": "2.20",
#                     "Draw": "2.38",
#                     "Away": "4.60"
#                 },
#                 "Both Teams Score": {
#                     "Yes": "2.08",
#                     "No": "1.68"
#                 },
#                 "Double Chance": {
#                     "Home/Draw": "1.17",
#                     "Home/Away": "1.27",
#                     "Draw/Away": "1.96"
#                 },
#                 "First Half Winner": {
#                     "Home": "2.43",
#                     "Draw": "2.08",
#                     "Away": "4.90"
#                 }
#             },
#             "Dafabet": {
#                 "Match Winner": {
#                     "Home": "1.78",
#                     "Draw": "3.30",
#                     "Away": "3.95"
#                 },
#                 "First Half Winner": {
#                     "Home": "2.41",
#                     "Draw": "1.96",
#                     "Away": "5.30"
#                 }
#             }
#         }
#     }
# }


# mock_data2 = {
#     "example_event": {
#         "league": "Mock League",
#         "date": "2024-02-01T20:00:00+00:00",
#         "bookmakers": {
#             "Bookmaker1": {
#                 "Match Winner": {
#                     "Home": "2.10",
#                     "Draw": "4.00",
#                     "Away": "3.80"
#                 },
#                 "First Half Winner": {
#                     "Home": "3.00",
#                     "Draw": "2.00",
#                     "Away": "4.50"
#                 }
#             },
#             "Bookmaker2": {
#                 "Match Winner": {
#                     "Home": "2.00",
#                     "Draw": "3.50",
#                     "Away": "4.00"
#                 },
#                 "First Half Winner": {
#                     "Home": "3.10",
#                     "Draw": "2.10",
#                     "Away": "4.00"
#                 }
#             },
#             "Unibet": {
#                 "Match Winner": {
#                     "Home": "1.74",
#                     "Draw": "3.35",
#                     "Away": "4.25"
#                 },
#                 "Home/Away": {
#                     "Home": "1.30",
#                     "Away": "3.30"
#                 }
#             },
#             "Marathonbet": {
#                 "Match Winner": {
#                     "Home": "1.72",
#                     "Draw": "3.44",
#                     "Away": "4.70"
#                 },
#                 "First Half Winner": {
#                     "Home": "2.09",
#                     "Draw": "2.34",
#                     "Away": "4.75"
#                 }
#             },

#         }
#     }
# }


# def find_arbitrage_opportunities(data, total_investment):
#     opportunities = []
#     not_opportunities = []

#     # Convert odds to probability
#     def odds_to_prob(odds):
#         return 1 / float(odds)

#     for event_id, event in data.items():
#         for bet_type in ["Match Winner", "First Half Winner", "Second Half Winner"]:
#             best_odds = {}
#             # Find the best odds for each outcome
#             for bookmaker, bets in event['bookmakers'].items():
#                 if bet_type in bets:
#                     for outcome, odds in bets[bet_type].items():
#                         if outcome not in best_odds or odds_to_prob(odds) < odds_to_prob(best_odds[outcome][1]):
#                             best_odds[outcome] = (bookmaker, odds)

#             # Check if there is an arbitrage opportunity
#             if len(best_odds) == 3:  # Make sure we have three outcomes
#                 total_prob = sum([odds_to_prob(odds)
#                                  for _, odds in best_odds.values()])
#                 if total_prob < 1:
#                     stakes = {outcome: total_investment /
#                               float(odds) for outcome, (_, odds) in best_odds.items()}
#                     profit = total_investment * (1 - total_prob)
#                     opportunities.append({
#                         "event_id": event_id,
#                         "bet_type": bet_type,
#                         "arbitrage_percentage": round((1 - total_prob) * 100, 2),
#                         "bets": [{"bookmaker": bookmaker, "outcome": outcome, "odds": odds, "stake": round(stake, 2)}
#                                  for (outcome, (bookmaker, odds)), stake in zip(best_odds.items(), stakes.values())],
#                         "expected_profit": round(profit, 2)
#                     })

#                 else:
#                     not_opportunities.append({
#                         "event_id": event_id,
#                         "bet_type": bet_type,
#                         "arbitrage_percentage": round((1 - total_prob) * 100, 2),
#                         "bets": [{"bookmaker": bookmaker, "outcome": outcome, "odds": odds}
#                                  for outcome, (bookmaker, odds) in best_odds.items()],
#                         "expected_profit": 0
#                     })

#         return opportunities


# import json

# opportunities = find_arbitrage_opportunities(odds_data, 1000)
# for opportunity in opportunities:
#     x = json.dumps(opportunity, indent=4)
#     print(x)
