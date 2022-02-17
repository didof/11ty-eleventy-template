const outdent = require('outdent')
const { attrs } = require('./index')

module.exports = function goey(slot, other) {
  return outdent`
    <footer class="goey" ${attrs(
      other
    )} data-author="https://codepen.io/z-" data-source="https://codepen.io/z-/pen/zYxdRQy?editors=1100">
        <div class="bubbles">
        <div class="bubble" style="--size:3.817488515850102rem; --distance:7.068286061260352rem; --position:-3.698857792842145%; --time:2.3182700722420493s; --delay:-2.8985784880302936s;"></div>
        <div class="bubble" style="--size:5.649688098913338rem; --distance:7.866989102069552rem; --position:56.893267201863694%; --time:3.1292375251540063s; --delay:-3.215335513523849s;"></div>
        <div class="bubble" style="--size:2.526156505033615rem; --distance:6.726252355191927rem; --position:94.37144874798975%; --time:2.6225100817076354s; --delay:-2.6192602884780944s;"></div>
        <div class="bubble" style="--size:2.2506041841435405rem; --distance:6.282321120348081rem; --position:23.514610244546862%; --time:3.920506154765425s; --delay:-3.949325634212111s;"></div>
        <div class="bubble" style="--size:2.542258349982137rem; --distance:7.934788526764409rem; --position:30.53209365446775%; --time:2.972513993364165s; --delay:-2.329934124781769s;"></div>
        <div class="bubble" style="--size:3.768899514264028rem; --distance:7.276533623666006rem; --position:1.7578375694879922%; --time:3.06186553266734s; --delay:-3.839330765645899s;"></div>
        <div class="bubble" style="--size:4.619092842760568rem; --distance:7.46993640603117rem; --position:87.93015176283933%; --time:3.805649371158093s; --delay:-2.416083583709124s;"></div>
        <div class="bubble" style="--size:3.8516224117278375rem; --distance:7.282639059850297rem; --position:16.914798037431215%; --time:3.0858793071550585s; --delay:-3.771172428968249s;"></div>
        <div class="bubble" style="--size:3.3660403125495106rem; --distance:8.495468695512834rem; --position:101.0745807469441%; --time:2.0319536752057057s; --delay:-3.028091774623066s;"></div>
        <div class="bubble" style="--size:2.010995163086898rem; --distance:7.119960197258818rem; --position:80.31836219810764%; --time:2.252766044318142s; --delay:-3.231553192681443s;"></div>
        <div class="bubble" style="--size:2.5369437330244953rem; --distance:6.968810323614071rem; --position:81.42885586340218%; --time:3.5558941811457516s; --delay:-3.866578311598363s;"></div>
        <div class="bubble" style="--size:5.345993518708113rem; --distance:6.769117373870713rem; --position:102.2113076636246%; --time:3.130271039988329s; --delay:-2.8531940021619873s;"></div>
        <div class="bubble" style="--size:2.9813145461115456rem; --distance:8.365218528831802rem; --position:41.016737649925055%; --time:2.0515053224501933s; --delay:-3.7415374996301667s;"></div>
        <div class="bubble" style="--size:5.611499904420011rem; --distance:9.856121448820385rem; --position:93.25963561409624%; --time:3.9077198266454145s; --delay:-2.3574758147466377s;"></div>
        <div class="bubble" style="--size:5.103873311224489rem; --distance:8.258915655245778rem; --position:45.678736611894706%; --time:3.4833777777250057s; --delay:-3.7398605557302584s;"></div>
        <div class="bubble" style="--size:3.992498451681829rem; --distance:8.01321274402252rem; --position:82.67580414529328%; --time:2.533808716107649s; --delay:-3.0531094210034597s;"></div>
        <div class="bubble" style="--size:4.042797208085286rem; --distance:6.934741138740406rem; --position:4.144912239716378%; --time:3.981830555211158s; --delay:-2.5220774805342767s;"></div>
        <div class="bubble" style="--size:3.4933676140861563rem; --distance:8.570997107388488rem; --position:0.7827765806525129%; --time:2.9051456098892716s; --delay:-3.9819253711068265s;"></div>
        <div class="bubble" style="--size:5.559421266849239rem; --distance:8.856234864671691rem; --position:52.74258623439973%; --time:2.74130497715115s; --delay:-3.9485628920665676s;"></div>
        <div class="bubble" style="--size:2.3515451885064635rem; --distance:8.41157076742406rem; --position:83.03817008033998%; --time:3.108162607462087s; --delay:-2.251597733293995s;"></div>
        <div class="bubble" style="--size:3.608222385878096rem; --distance:6.097636820565032rem; --position:54.07148723656542%; --time:2.562213504267318s; --delay:-2.2992713647687024s;"></div>
        <div class="bubble" style="--size:3.4735208749043576rem; --distance:6.982383860041886rem; --position:94.56588364519824%; --time:3.245703285660788s; --delay:-2.404253791530512s;"></div>
        <div class="bubble" style="--size:4.22946840968803rem; --distance:9.271561824600685rem; --position:8.646279277971416%; --time:2.803268589496246s; --delay:-2.167304616864237s;"></div>
        <div class="bubble" style="--size:3.5724916888298273rem; --distance:8.557602320611796rem; --position:65.6334939866083%; --time:2.2854321331430882s; --delay:-3.5472083751865346s;"></div>
        <div class="bubble" style="--size:5.415133103860108rem; --distance:9.923058941087596rem; --position:55.90665149810128%; --time:2.7416293995992715s; --delay:-3.9746551956752243s;"></div>
        <div class="bubble" style="--size:3.2118935280290932rem; --distance:6.899950759185064rem; --position:68.3440143668504%; --time:3.200409422215685s; --delay:-3.8636977352280115s;"></div>
        <div class="bubble" style="--size:3.6358223550180986rem; --distance:6.1867087144619175rem; --position:56.571812799180265%; --time:3.8734618234068194s; --delay:-2.0167122805917996s;"></div>
        <div class="bubble" style="--size:5.980138814694065rem; --distance:8.306118695168728rem; --position:45.0552512267779%; --time:3.950161962274865s; --delay:-3.514082502740512s;"></div>
        <div class="bubble" style="--size:2.9890866412220785rem; --distance:7.782578253347161rem; --position:40.513818952069656%; --time:3.8450860901003714s; --delay:-3.7154754086640445s;"></div>
        <div class="bubble" style="--size:3.1045019348332046rem; --distance:6.486089948978072rem; --position:38.951652938789756%; --time:2.5986772086063414s; --delay:-3.614129040809512s;"></div>
        <div class="bubble" style="--size:4.219748996508672rem; --distance:8.750766248494651rem; --position:54.909013266833185%; --time:2.677962405284628s; --delay:-3.81659536545918s;"></div>
        <div class="bubble" style="--size:3.345563367683112rem; --distance:7.807762528141935rem; --position:78.21788406088743%; --time:3.999043775697401s; --delay:-3.730158540648795s;"></div>
        <div class="bubble" style="--size:3.485179658224321rem; --distance:6.3531668575229565rem; --position:19.540436072346214%; --time:2.240073249894868s; --delay:-2.4858992338118835s;"></div>
        <div class="bubble" style="--size:5.523429278200854rem; --distance:8.401706827773996rem; --position:-0.3577954266041905%; --time:3.234240480595691s; --delay:-3.3079197857279605s;"></div>
        <div class="bubble" style="--size:4.910492183348696rem; --distance:9.542910098239535rem; --position:15.393626853066952%; --time:3.1031146654698527s; --delay:-3.423209686236408s;"></div>
        <div class="bubble" style="--size:3.5466028934094913rem; --distance:6.08176985740952rem; --position:19.020699791980565%; --time:2.0234661566656484s; --delay:-2.7033711512918104s;"></div>
        <div class="bubble" style="--size:5.589241379398496rem; --distance:7.1594519420331055rem; --position:3.33009614452709%; --time:3.141016434275594s; --delay:-3.6777711731239835s;"></div>
        <div class="bubble" style="--size:3.2545214081751865rem; --distance:6.401964484151304rem; --position:93.16933567026692%; --time:3.91882253469448s; --delay:-2.7737456438132337s;"></div>
        <div class="bubble" style="--size:4.049721758340113rem; --distance:6.669922252686246rem; --position:0.21691933781973383%; --time:3.9743811734831813s; --delay:-2.317254744495887s;"></div>
        <div class="bubble" style="--size:3.7889698266324476rem; --distance:7.207640691983435rem; --position:57.225611875516094%; --time:2.279025076125981s; --delay:-3.481531633782552s;"></div>
        <div class="bubble" style="--size:4.037031226407321rem; --distance:9.173086145773711rem; --position:25.527849928658725%; --time:3.565497700570111s; --delay:-3.802404263859497s;"></div>
        <div class="bubble" style="--size:2.9354772959622757rem; --distance:6.466364742631178rem; --position:34.52618171358249%; --time:3.6524385415510965s; --delay:-2.3034905629734013s;"></div>
        <div class="bubble" style="--size:3.2027743936189275rem; --distance:9.837079345598058rem; --position:99.57633993748952%; --time:2.8549259711150827s; --delay:-3.0913293564170976s;"></div>
        <div class="bubble" style="--size:3.028336836131955rem; --distance:9.307235765804263rem; --position:36.00878335260411%; --time:2.810553769675465s; --delay:-3.831584411444846s;"></div>
        <div class="bubble" style="--size:4.479731118326944rem; --distance:6.346175854830705rem; --position:36.534026836174164%; --time:2.5686441047870145s; --delay:-3.6438293401462327s;"></div>
        <div class="bubble" style="--size:4.675379845492288rem; --distance:9.62994507141895rem; --position:82.11197486197266%; --time:2.1781116017626103s; --delay:-2.834528377884825s;"></div>
        <div class="bubble" style="--size:3.8229918642198015rem; --distance:8.291436856459537rem; --position:44.87803351635786%; --time:3.753766781452546s; --delay:-2.6229629179668925s;"></div>
        <div class="bubble" style="--size:2.8514297487842404rem; --distance:7.161198235246105rem; --position:35.465515209437775%; --time:2.41580060242794s; --delay:-2.973547242150483s;"></div>
        <div class="bubble" style="--size:5.027096525053414rem; --distance:9.197172853578351rem; --position:19.266646257420305%; --time:2.3362698256287797s; --delay:-3.7715573177598785s;"></div>
        <div class="bubble" style="--size:5.498009246013869rem; --distance:9.859115980382708rem; --position:7.2260728965758965%; --time:3.820753100800498s; --delay:-2.4989814261372127s;"></div>
        <div class="bubble" style="--size:2.1264027930337557rem; --distance:8.741312788288866rem; --position:85.03354204951304%; --time:3.471708002125994s; --delay:-2.8667078047030214s;"></div>
        <div class="bubble" style="--size:3.8108585504075894rem; --distance:6.032506523666936rem; --position:47.394351182957394%; --time:3.465250671340588s; --delay:-3.731061488338166s;"></div>
        <div class="bubble" style="--size:3.833396947538251rem; --distance:7.000665144643724rem; --position:43.03021060612293%; --time:2.1368187054111285s; --delay:-3.1600503718672175s;"></div>
        <div class="bubble" style="--size:3.636567557710994rem; --distance:7.474056069910693rem; --position:22.622573492028387%; --time:3.5825366569312265s; --delay:-2.4486395602172233s;"></div>
        <div class="bubble" style="--size:5.275435511701729rem; --distance:8.938751378746414rem; --position:20.53639499177532%; --time:3.927129136249154s; --delay:-3.070947711205038s;"></div>
        <div class="bubble" style="--size:4.473102513697379rem; --distance:6.721421348806436rem; --position:89.62075192409532%; --time:3.2577496346898327s; --delay:-2.994558337629033s;"></div>
        <div class="bubble" style="--size:3.1979644654446773rem; --distance:7.824933184641346rem; --position:2.9399762262823925%; --time:2.6122699165103684s; --delay:-2.2429302364938977s;"></div>
        <div class="bubble" style="--size:5.19404869746294rem; --distance:7.224022681163405rem; --position:72.25662964104909%; --time:3.2316606941059756s; --delay:-2.496619002872529s;"></div>
        <div class="bubble" style="--size:4.58085967433476rem; --distance:8.634180639258354rem; --position:10.479137651169495%; --time:3.114457370911942s; --delay:-2.748709191995158s;"></div>
        <div class="bubble" style="--size:2.4695693325783274rem; --distance:6.8830294162905075rem; --position:73.77913506870011%; --time:2.9237029495962297s; --delay:-2.3135328081461872s;"></div>
        <div class="bubble" style="--size:5.236927779768337rem; --distance:7.027034116345761rem; --position:7.075710650009107%; --time:2.4486313804972957s; --delay:-3.0574754794868695s;"></div>
        <div class="bubble" style="--size:4.418901512345115rem; --distance:6.915478779026036rem; --position:100.70841397117788%; --time:3.7418010406222875s; --delay:-3.5898465844236824s;"></div>
        <div class="bubble" style="--size:2.6349950988117445rem; --distance:6.145076711511477rem; --position:5.222626120924264%; --time:3.5040940921924637s; --delay:-2.961497228936183s;"></div>
        <div class="bubble" style="--size:3.8386973407549094rem; --distance:8.747090640355587rem; --position:10.532321845256693%; --time:2.2114187637127203s; --delay:-2.432829387765897s;"></div>
        <div class="bubble" style="--size:3.824127362747496rem; --distance:8.334291381276302rem; --position:35.281678551503376%; --time:2.472673405292813s; --delay:-2.9610789066465797s;"></div>
        <div class="bubble" style="--size:5.463770676712704rem; --distance:9.565727357974392rem; --position:90.92483509835886%; --time:2.889317343825019s; --delay:-3.121896774920578s;"></div>
        <div class="bubble" style="--size:3.912020929285201rem; --distance:7.664107142511868rem; --position:81.77653471460185%; --time:2.769453705341199s; --delay:-2.572836610359277s;"></div>
        <div class="bubble" style="--size:4.041593867402655rem; --distance:9.49682907055573rem; --position:35.48742549957124%; --time:2.193831348073558s; --delay:-2.2957578629051985s;"></div>
        <div class="bubble" style="--size:4.469907587444885rem; --distance:9.372827254393332rem; --position:25.20605643563744%; --time:2.357244905237698s; --delay:-3.822508456832275s;"></div>
        <div class="bubble" style="--size:5.072676182456184rem; --distance:6.757700498444705rem; --position:93.78042070919827%; --time:3.945177120528636s; --delay:-2.5863018837552882s;"></div>
        <div class="bubble" style="--size:5.387771329151513rem; --distance:7.407452959168557rem; --position:46.849976491815625%; --time:3.4232860995356877s; --delay:-2.995076106729255s;"></div>
        <div class="bubble" style="--size:2.0184301293705706rem; --distance:7.163914300610475rem; --position:36.4016149632325%; --time:3.1256787126837686s; --delay:-3.586301942360368s;"></div>
        <div class="bubble" style="--size:2.492865273925415rem; --distance:8.231356788994534rem; --position:66.34534523087%; --time:3.4567231113951165s; --delay:-2.056270624788502s;"></div>
        <div class="bubble" style="--size:2.6510618122749348rem; --distance:6.989100489448119rem; --position:30.806591504768953%; --time:3.5556744739657216s; --delay:-2.6505848832409007s;"></div>
        <div class="bubble" style="--size:2.2600386231368343rem; --distance:9.564408615211512rem; --position:1.7778585030984528%; --time:3.060978036457748s; --delay:-2.612538760934747s;"></div>
        <div class="bubble" style="--size:3.244072210444261rem; --distance:9.32385722783038rem; --position:77.16332501197328%; --time:3.9206370397956105s; --delay:-3.284834607116265s;"></div>
        <div class="bubble" style="--size:3.4098768450302837rem; --distance:9.052978152740948rem; --position:47.623892735677565%; --time:3.3038373291487497s; --delay:-3.0158284591552036s;"></div>
        <div class="bubble" style="--size:4.496832719411248rem; --distance:7.341995850510943rem; --position:2.820551736378749%; --time:3.2782585362940466s; --delay:-3.2582259333120565s;"></div>
        <div class="bubble" style="--size:3.5283705652738684rem; --distance:9.829444031759607rem; --position:13.572336732549875%; --time:3.104132491603347s; --delay:-3.3029897218992343s;"></div>
        <div class="bubble" style="--size:3.449194176383732rem; --distance:7.428781809333103rem; --position:58.26135563955147%; --time:2.215668875562923s; --delay:-2.219325442508789s;"></div>
        <div class="bubble" style="--size:4.638552515475398rem; --distance:8.418883886206128rem; --position:45.769991792613276%; --time:2.145127056613479s; --delay:-2.2292092981619454s;"></div>
        <div class="bubble" style="--size:5.1019948893385125rem; --distance:8.219511192042605rem; --position:20.480010479621804%; --time:2.3223716281495093s; --delay:-3.234336748665694s;"></div>
        <div class="bubble" style="--size:4.6761036514714185rem; --distance:8.724887178973443rem; --position:12.840937278559533%; --time:2.288944873135361s; --delay:-3.618139209597788s;"></div>
        <div class="bubble" style="--size:3.9876549632081764rem; --distance:9.187108270499218rem; --position:34.487189384158754%; --time:3.6300519115535748s; --delay:-3.6449840905212123s;"></div>
        <div class="bubble" style="--size:3.8890411756970558rem; --distance:8.302498447160733rem; --position:83.73967599921677%; --time:2.0571317674961382s; --delay:-3.630630410789592s;"></div>
        <div class="bubble" style="--size:4.8709971314994585rem; --distance:6.65341725729879rem; --position:13.768297207340392%; --time:3.154445307069265s; --delay:-3.305945663947403s;"></div>
        <div class="bubble" style="--size:4.704695511524006rem; --distance:7.503772456295647rem; --position:38.683759263244355%; --time:3.738380397753856s; --delay:-2.434868943423998s;"></div>
        <div class="bubble" style="--size:5.207088061451386rem; --distance:9.021406284940053rem; --position:62.28517795862135%; --time:2.153988911290853s; --delay:-2.0634077854896464s;"></div>
        <div class="bubble" style="--size:3.174397141680199rem; --distance:7.51576191599413rem; --position:41.13181091898365%; --time:3.889961715511248s; --delay:-2.523444855317587s;"></div>
        <div class="bubble" style="--size:2.266442127345851rem; --distance:8.840953781963215rem; --position:24.173784179144562%; --time:3.761526844751062s; --delay:-2.50540897453151s;"></div>
        <div class="bubble" style="--size:2.397782193013666rem; --distance:9.78659661780543rem; --position:48.51107658965453%; --time:2.1252180625163843s; --delay:-2.970996157056624s;"></div>
        <div class="bubble" style="--size:5.809952079498774rem; --distance:7.744049966343458rem; --position:26.42758389756874%; --time:3.82676573044635s; --delay:-3.8235936850373218s;"></div>
        <div class="bubble" style="--size:4.681480249664168rem; --distance:6.207824855547927rem; --position:67.26355629454673%; --time:3.7665720651822676s; --delay:-2.693379181389383s;"></div>
        <div class="bubble" style="--size:5.675064716340371rem; --distance:8.462588873573257rem; --position:61.852859489268%; --time:2.856104712563769s; --delay:-2.6858340816414072s;"></div>
        <div class="bubble" style="--size:4.434492888999384rem; --distance:8.091491836797692rem; --position:64.40884737183683%; --time:3.1980354162321385s; --delay:-2.923516346972673s;"></div>
        <div class="bubble" style="--size:5.537958646203501rem; --distance:7.26305950536059rem; --position:36.37084730429807%; --time:2.95134980356586s; --delay:-2.8295851831135086s;"></div>
        <div class="bubble" style="--size:5.735680574546858rem; --distance:9.301308316079345rem; --position:97.37832907275845%; --time:3.150938196436654s; --delay:-3.811220551626226s;"></div>
        <div class="bubble" style="--size:5.743213465605297rem; --distance:8.775034297002588rem; --position:76.82084710838124%; --time:2.3955487098331694s; --delay:-2.832942223495013s;"></div>
        <div class="bubble" style="--size:5.497691884451735rem; --distance:9.864572171256748rem; --position:0.6795270691802742%; --time:2.4851393145347975s; --delay:-2.349461823316153s;"></div>
        <div class="bubble" style="--size:3.8065716647321937rem; --distance:7.0665779624181155rem; --position:43.923429261560365%; --time:2.313178089968493s; --delay:-2.7815421202838895s;"></div>
        <div class="bubble" style="--size:4.788551327598374rem; --distance:6.8819937371659785rem; --position:76.89107329681447%; --time:3.4968555509079606s; --delay:-3.087680468528072s;"></div>
        <div class="bubble" style="--size:3.578925284883942rem; --distance:9.993074450139789rem; --position:72.19754191515038%; --time:2.861389907441833s; --delay:-2.2473530194395077s;"></div>
        <div class="bubble" style="--size:2.634939836874068rem; --distance:8.021049362282549rem; --position:62.495243876390944%; --time:2.5853370042785238s; --delay:-2.5758394285124107s;"></div>
        <div class="bubble" style="--size:4.414093304147431rem; --distance:9.792225900150923rem; --position:24.562208573284703%; --time:3.7281743095227267s; --delay:-2.552239626034719s;"></div>
        <div class="bubble" style="--size:5.272509237603064rem; --distance:8.928514087016499rem; --position:17.037919567400536%; --time:2.164587167282573s; --delay:-2.1553321385036495s;"></div>
        <div class="bubble" style="--size:5.587544864818821rem; --distance:7.1632035896923245rem; --position:103.64736983152281%; --time:2.755496939758943s; --delay:-2.3638989208058696s;"></div>
        <div class="bubble" style="--size:4.261761603649302rem; --distance:8.821306248694604rem; --position:-2.119932771864159%; --time:2.505868661114514s; --delay:-2.5376610780426536s;"></div>
        <div class="bubble" style="--size:4.98600803880693rem; --distance:8.65288415924039rem; --position:57.06974838458361%; --time:2.552221416568296s; --delay:-2.8427275987529006s;"></div>
        <div class="bubble" style="--size:4.6722900987921365rem; --distance:9.725994197057911rem; --position:81.93793910816827%; --time:2.8728950727734164s; --delay:-2.535350532652993s;"></div>
        <div class="bubble" style="--size:3.981483142690662rem; --distance:6.742052117676122rem; --position:37.90259738949277%; --time:3.138003078345459s; --delay:-2.9299331954497316s;"></div>
        <div class="bubble" style="--size:3.756183428276154rem; --distance:8.88157383528633rem; --position:16.283576813651184%; --time:3.3348181575747184s; --delay:-3.975876904772252s;"></div>
        <div class="bubble" style="--size:3.6506572954144705rem; --distance:8.431225327459687rem; --position:78.8178349886969%; --time:3.834129737970122s; --delay:-2.1128261458539668s;"></div>
        <div class="bubble" style="--size:2.2782454294748105rem; --distance:6.914374420846803rem; --position:79.46265137935669%; --time:2.959638242381539s; --delay:-3.918202470769152s;"></div>
        <div class="bubble" style="--size:2.6663287393140322rem; --distance:6.006661831050336rem; --position:81.60165997178207%; --time:2.9855284018094013s; --delay:-2.517230501030021s;"></div>
        <div class="bubble" style="--size:5.778761770157558rem; --distance:8.813399806482485rem; --position:93.7556837526029%; --time:2.571061395817362s; --delay:-3.8234444313372298s;"></div>
        <div class="bubble" style="--size:2.3102496632299063rem; --distance:7.470155068985888rem; --position:59.54706484371026%; --time:3.889979177890392s; --delay:-2.39040287411505s;"></div>
        <div class="bubble" style="--size:3.785325382492707rem; --distance:8.902032841002324rem; --position:40.48096414384105%; --time:3.389198632632405s; --delay:-3.99763063316564s;"></div>
        <div class="bubble" style="--size:5.434809963574158rem; --distance:8.583456756947054rem; --position:26.216324956558218%; --time:3.9797742521334047s; --delay:-3.833347647815915s;"></div>
        <div class="bubble" style="--size:5.285367856743528rem; --distance:6.611649095641362rem; --position:35.27533084850829%; --time:3.6631201938696365s; --delay:-2.0182796819605286s;"></div>
        <div class="bubble" style="--size:5.20663934118139rem; --distance:6.836052408317736rem; --position:37.0021839074949%; --time:2.165270627849146s; --delay:-2.5615187168308413s;"></div>
        <div class="bubble" style="--size:5.281057124991563rem; --distance:9.622263166940133rem; --position:72.60925604794022%; --time:3.0593518808817883s; --delay:-2.0030377389827465s;"></div>
        <div class="bubble" style="--size:2.753002509083198rem; --distance:6.659868766392978rem; --position:15.480313664465967%; --time:3.4499828182581194s; --delay:-2.627985185308257s;"></div>
        <div class="bubble" style="--size:3.098175852910096rem; --distance:7.531253077390523rem; --position:42.34496259345775%; --time:2.9671620055040733s; --delay:-2.046112313880182s;"></div>
        <div class="bubble" style="--size:5.73791061317475rem; --distance:7.62737755193045rem; --position:50.19057192728676%; --time:3.4504247474853647s; --delay:-2.792843666560498s;"></div>
        <div class="bubble" style="--size:2.2553600306554795rem; --distance:7.6955686093442495rem; --position:60.465343975829924%; --time:2.8078431074686785s; --delay:-2.6048988572484295s;"></div>
        <div class="bubble" style="--size:3.1465289060332555rem; --distance:7.615863508367665rem; --position:68.79559605743115%; --time:2.2789020383759793s; --delay:-2.5534605522209866s;"></div>
        <div class="bubble" style="--size:2.761264960953846rem; --distance:7.23117171347907rem; --position:77.56150982231928%; --time:3.6230862747695025s; --delay:-2.7882820172363396s;"></div>
        <div class="bubble" style="--size:3.04238172167294rem; --distance:9.614260556176923rem; --position:99.95846689668059%; --time:3.7391969687682125s; --delay:-3.522291161120445s;"></div>
        </div>
        <div class="content">
        ${slot}
        </div>
    </footer>
    <svg style="position:fixed; top:100vh">
    <defs>
        <filter id="blob">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
        <feComposite in="SourceGraphic" in2="blob" operator="atop"></feComposite>
        </filter>
    </defs>
    </svg>
    `
}
