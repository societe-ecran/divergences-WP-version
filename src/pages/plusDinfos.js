import React from "react";
import Layout from "../components/layout";
import "../assets/css/main.css";
import "../fonts/fonts.css";
import { Container, Row, Col } from "reactstrap";
import Seo from "../components/seo";

const plusDinfo = () => (
  <Layout>
    <Seo
      siteTitle="Editions Divergences"
      title="Infos"
      description="Fondées en septembre 2016, les éditions divergences s’attachent à
          publier des ouvrages de critique sociale et politique. Quel que soit
          l’angle par lequel ils abordent le réel nos livres cherchent à
          comprendre et à rendre intelligible le monde dans lequel nous
          vivons, à le combattre et en imaginer de nouveaux, plus beaux, plus
          justes et plus désirables."
      keywords={[`editeur`, `graphisme`, `developpement web`, `diffusion`]}
    />
    <Row className="mx-0">
      <Col xs="6" className="d-block d-sm-none  "></Col>
    </Row>
    <Container fluid className=" mx-0 px-0 interligne borderGeneral-bottom ">
      <Row className="mx-0 px-0 ">
        <div className="d-block d-sm-none textFont">
          Editions divergences
          <br />
          3, rue de l’Asile Popincourt
          <br />
          75011 Paris
          <br />
          <br />
          contact@editionsdivergences.com
        </div>

        <div>
          <p className="textFont">
            Fondées en septembre 2016, les éditions divergences s’attachent à
            publier des ouvrages de critique sociale et politique. Quel que soit
            l’angle par lequel ils abordent le réel nos livres cherchent à
            comprendre et à rendre intelligible le monde dans lequel nous
            vivons, à le combattre et en imaginer de nouveaux, plus beaux, plus
            justes et plus désirables.
          </p>
        </div>
      </Row>
      <Row className="pt-3 mx-0 px-0">
        <Col className="pr-3 pl-0 borderGeneral-right">
          <div className=" textFont">
            <p>
              Fondateur et directeur éditorial :<br />
              Johan Badour
            </p>
            Éditeur :<br />
            <p>Alex Taillard</p>
            Communication et relations presse :<br />
            <p>
              Zoé Serafinowicz
              <br />
            </p>
            Graphisme :<br />
            <p>
              Morgane Masse
              <br /> Anouk Rebaud
              <br />
              Mouvement C (Arnaud Crassat et Alexandre Mouawad)
              <br />
            </p>
            Développement Web :
            <br />
            <p>
              Société écrans
              <br />
            </p>
          </div>

          <img
            className="cent pt-5 pb-3"
            alt="divergences"
            src="https://res.cloudinary.com/dc0hoba1w/image/upload/v1607600822/small_depliant_215a65696f.png"
          ></img>
        </Col>

        <Col className="textFont newsMagin">
          <p>
            Diffusion & Distribution
            <br />{" "}
          </p>
          <p className="text-center font-italic textFont">
            Pour la France et la Belgique
            <br />
          </p>
          Diffusion :<br />
          <p className="">
            HOBO DIFFUSION
            <br />
            23 rue Pradier
            <br />
            75019 Paris
            <br />
            Tél. : 06 46 79 40 71
            <br />
          </p>
          Distribution :<br />
          <p className="">
            MAKASSAR DISTRIBUTION
            <br />
            8 rue Pelleport
            <br />
            75020 PARIS
            <br />
            Tél : 01 40 33 69 69
            <br />
            Fax : 01 40 33 91 30
            <br />
            contact@makassar-diffusion.com
            <br />
          </p>
          <p className="text-center font-italic">
            Pour la Suisse
            <br />
          </p>
          <p>
            Diffusion :<br />
            AVEC PLAISIR
            <br />
            Phil Berger
            <br />
            Tél. : + 41 22 301 17 74
            <br />
            pberger@servidis.ch
            <br />
          </p>
          <p>
            {" "}
            Distribution :<br />
            SERVIDIS
            <br />
            Ch. Des Chalets 7<br />
            1279 Chavennes-de-Bogis | Tél. : + 41 22 960 95 10 |<br />
            commande@servidis.ch <br />
          </p>
          <p className="text-center font-italic">
            Pour le Québec <br />
          </p>
          <p className=" pb-5">
            Diffusion/Distribution : DIMEDIA
            <br />
          </p>
        </Col>
      </Row>
  </Container>

  <Container fluid className="px-0" >

 
      <Row className="textFont ">
        <Col>
      
        <p className="pt-2">Conditions générales de vente</p>

        <p>
          « Nos conditions générales de vente ont été élaborées à partir d’un
          modèle libre et gratuit qui peut être téléchargé sur le site
          https://www.donneespersonnelles.fr » Entre l’association Éditions
          Divergences, 3, rue de l’Asile Popincourt 75011 Paris, SIRET 823 103
          049 00016. L’association peut être jointe par email en cliquant sur le
          formulaire de contact accessible via la page d’accueil du site.
          Ci-après le « Vendeur» ou la « Société ». D’une part, Et la personne
          physique ou morale procédant à l’achat de produits ou services de la
          société, Ci-après, « l’Acheteur », ou « le Client » D’autre part, Il a
          été exposé et convenu ce qui suit :
        </p>

        <p>PREAMBULE</p>

        <p>
          Le Vendeur est éditeur de livres exclusivement à destination de
          consommateurs, commercialisés par l’intermédiaire de son site Internet
          (http://www.editionsdivergences.com). La liste et le descriptif des
          biens et services proposés par la Société peuvent être consultés sur
          le site susmentionné.
        </p>
        <p>Article 1 : Objet et dispositions générales</p>
        <p>
          Les présentes Conditions Générales de Vente déterminent les droits et
          obligations des parties dans le cadre de la vente en ligne de Produits
          proposés par le Vendeur. Les présentes Conditions Générales de Vente
          (CGV) s’appliquent à toutes les ventes de Produits, effectuées au
          travers des sites Internet de la Société qui sont partie intégrante du
          Contrat entre l’Acheteur et le Vendeur. Le Vendeur se réserve la
          possibilité de modifier les présentes, à tout moment par la
          publication d’une nouvelle version sur son site Internet. Les CGV
          applicables alors sont celles étant en vigueur à la date du paiement
          (ou du premier paiement en cas de paiements multiples) de la commande.
          La Société s’assure également que leur acceptation soit claire et sans
          réserve en mettant en place une case à cocher et un clic de
          validation. Le Client déclare avoir pris connaissance de l’ensemble
          des présentes Conditions Générales de Vente, et le cas échéant des
          Conditions Particulières de Vente liées à un produit ou à un service,
          et les accepter sans restriction ni réserve. Le Client reconnaît qu’il
          a bénéficié des conseils et informations nécessaires afin de s’assurer
          de l’adéquation de l’offre à ses besoins. Le Client déclare être en
          mesure de contracter légalement en vertu des lois françaises ou
          valablement représenter la personne physique ou morale pour laquelle
          il s’engage. Sauf preuve contraire les informations enregistrées par
          la Société constituent la preuve de l’ensemble des transactions.
        </p>
        <p>Article 2 : Prix</p>
        <p>
          Les prix des produits vendus au travers des sites Internet sont
          indiqués en Euros hors taxes et précisément déterminés sur les pages
          de descriptifs des Produits. Ils sont également indiqués en euros
          toutes taxes comprises (TVA + autres taxes éventuelles) sur la page de
          commande des produits, et hors frais spécifiques d’expédition. Pour
          tous les produits expédiés hors Union européenne et/ou DOM-TOM, le
          prix est calculé hors taxes automatiquement sur la facture. Des droits
          de douane ou autres taxes locales ou droits d’importation ou taxes
          d’état sont susceptibles d’être exigibles dans certains cas. Ces
          droits et sommes ne relèvent pas du ressort du Vendeur. Ils seront à
          la charge de l’acheteur et relèvent de sa responsabilité
          (déclarations, paiement aux autorités compétentes, etc.). Le Vendeur
          invite à ce titre l’acheteur à se renseigner sur ces aspects auprès
          des autorités locales correspondantes.La Société se réserve la
          possibilité de modifier ses prix à tout moment pour l’avenir. Les
          frais de télécommunication nécessaires à l’accès aux sites Internet de
          la Société sont à la charge du Client. Le cas échéant également, les
          frais de livraison.
        </p>
        <p>Article 3 : Conclusion du contrat en ligne</p>
        <p>
          Le Client devra suivre une série d’étapes spécifiques à chaque Produit
          offert par le Vendeur pour pouvoir réaliser sa commande. Toutefois,
          les étapes décrites ci-après sont systématiques : ➢ Information sur
          les caractéristiques essentielles du Produit ; ➢ Choix du Produit, le
          cas échéant de ses options et indication des données essentielles du
          Client (identification, adresse…) ; ➢ Acceptation des présentes
          Conditions Générales de Vente. ➢ Vérification des éléments de la
          commande et, le cas échéant, correction des erreurs. ➢ Suivi des
          instructions pour le paiement, et paiement des produits. ➢ Livraison
          des produits. Le Client recevra alors confirmation par courrier
          électronique du paiement de la commande, ainsi qu’un accusé de
          réception de la commande la confirmant. Il recevra un exemplaire .pdf
          des présentes conditions générales de vente. Pour les produits livrés,
          cette livraison se fera à l’adresse indiquée par le Client. Aux fins
          de bonne réalisation de la commande, et conformément à l’article
          1316-1 du Code civil, le Client s’engage à fournir ses éléments
          d’identification véridiques. Le Vendeur se réserve la possibilité de
          refuser la commande, par exemple pour toute demande anormale, réalisée
          de mauvaise foi ou pour tout motif légitime.
        </p>
        <p>Article 4 : Produits et services</p>

        <p>
          Les caractéristiques essentielles des biens, des services et leurs
          prix respectifs sont mis à disposition de l’acheteur sur les sites
          Internet de la société. Le client atteste avoir reçu un détail des
          frais de livraison ainsi que les modalités de paiement, de livraison
          et d’exécution du contrat. Le Vendeur s’engage à honorer la commande
          du Client dans la limite des stocks de Produits disponibles
          uniquement. A défaut, le Vendeur en informe le Client. Ces
          informations contractuelles sont présentées en détail et en langue
          française. Conformément à la loi française, elles font l’objet d’un
          récapitulatif et d’une confirmation lors de la validation de la
          commande. Les parties conviennent que les illustrations ou photos des
          produits offerts à la vente n’ont pas de valeur contractuelle. La
          durée de validité de l’offre des Produits ainsi que leurs prix est
          précisée sur les sites Internet de la Société, ainsi que la durée
          minimale des contrats proposés lorsque ceux-ci portent sur une
          fourniture continue ou périodique de produits ou services. Sauf
          conditions particulières, les droits concédés au titre des présentes
          le sont uniquement à la personne physique signataire de la commande
          (ou la personne titulaire de l’adresse email communiqué).Conformément
          aux dispositions légales en matière de conformité et de vices cachés,
          le Vendeur rembourse ou échange les produits défectueux ou ne
          correspondant pas à la commande.
        </p>

        <p>Article 5 : Clause de réserve de propriété</p>

        <p>
          Les produits demeurent la propriété de la Société jusqu’au complet
          paiement du prix.
        </p>

        <p>Article 6 : Modalités de livraison</p>

        <p>
          Les produits sont livrés à l’adresse de livraison qui a été indiquée
          lors de la commande et le délai indiqué. Ce délai ne prend pas en
          compte le délai de préparation de la commande. En cas de retard de
          livraison, le Client dispose de la possibilité de résoudre le contrat
          dans les conditions et modalités définies à l’Article L 138-2 du Code
          de la consommation.Le Vendeur procède alors au remboursement du
          produit et aux frais « aller » dans les conditions de l’Article L
          138-3 du Code de la consommation. Le Vendeur met à disposition un
          point de contact téléphonique (coût d’une communication locale à
          partir d’un poste fixe) indiqué dans l’email de confirmation de
          commande afin d’assurer le suivi de la commande. Le Vendeur rappelle
          qu’au moment où le Client pend possession physiquement des produits,
          les risques de perte ou d’endommagement des produits lui est
          transféré. Il appartient au Client de notifier au transporteur toute
          réserves sur le produit livré.
        </p>

        <p>Article 7 : Disponibilité et présentation</p>

        <p>
          Les commandes seront traitées dans la limite de nos stocks disponibles
          ou sous réserve des stocks disponibles chez nos fournisseurs.
        </p>

        <p>Article 8 : Paiement</p>

        <p>
          Le paiement est exigible immédiatement à la commande, y compris pour
          les produits en précommande. Le Client peut effectuer le règlement par
          carte de paiement ou chèque bancaire. Les cartes émises par des
          banques domiciliées hors de France doivent obligatoirement être des
          cartes bancaires internationales (Mastercard ou Visa). Une fois le
          paiement lancé par le Client, la transaction est immédiatement débitée
          après vérification des informations. Conformément à l’article L. 132-2
          du Code monétaire et financier, l’engagement de payer donné par carte
          est irrévocable. En communiquant ses informations bancaires lors de la
          vente, le Client autorise le Vendeur à débiter sa carte du montant
          relatif au prix indiqué. Le Client confirme qu’il est bien le
          titulaire légal de la carte à débiter et qu’il est légalement en droit
          d’en faire usage. En cas d’erreur, ou d’impossibilité de débiter la
          carte, la Vente est immédiatement résolue de plein droit et la
          commande annulée.
        </p>

        <p>Article 9 : Délai de rétractation</p>

        <p>
          Conformément à l’article L. 121-20 du Code de la consommation, « le
          consommateur dispose d’un délai de quatorze jours francs pour exercer
          son droit de rétractation sans avoir à justifier de motifs ni à payer
          de pénalités, à l’exception, le cas échéant, des frais de retour ». «
          Le délai mentionné à l’alinéa précédent court à compter de la
          réception pour les biens ou de l’acceptation de l’offre pour les
          prestations de services ». En cas d’exercice du droit de rétractation
          dans le délai susmentionné, seul le prix du ou des produits achetés et
          les frais d’envoi seront remboursés, les frais de retour restent à la
          charge du Client. Les retours des produits sont à effectuer dans leur
          état d’origine et complets (emballage, accessoires, notice…) de sorte
          qu’ils puissent être recommercialisés à l’état neuf ; ils doivent si
          possible être accompagnés d’une copie du justificatif d’achat.
        </p>

        <p>Article 10 : Garanties</p>

        <p>
          Conformément à la loi, le Vendeur assume deux garanties : de
          conformité et relative aux vices cachés des produits. Le Vendeur
          rembourse l’acheteur ou échange les produits apparemment défectueux ou
          ne correspondant pas à la commande effectuée. Le Vendeur rappelle que
          le consommateur : – dispose d’un délai de 2 ans à compter de la
          délivrance du bien pour agir auprès du Vendeur – qu’il peut choisir
          entre le remplacement et la réparation du bien sous réserve des
          conditions prévues par l’art. apparemment défectueux ou ne
          correspondant – qu’il est dispensé d’apporter la preuve l’existence du
          défaut de conformité du bien durant les six mois suivant la délivrance
          du bien. – que, sauf biens d’occasion, ce délai sera porté à 24 mois à
          compter du 18 mars 2016 – que le consommateur peut également faire
          valoir la garantie contre les vices cachés de la chose vendue au sens
          de l’article 1641 du code civil et, dans cette hypothèse, il peut
          choisir entre la résolution de la vente ou une réduction du prix de
          vente (dispositions des articles 1644 du Code Civil).
        </p>

        <p>Article 11 : Réclamations</p>

        <p>
          Le cas échéant, l’Acheteur peut présenter toute réclamation en
          contactant la société au moyen des coordonnées suivantes :
          contact@editionsdivergences.com.
        </p>

        <p>Article 12 : Droits de propriété intellectuelle</p>

        <p>
          Les marques, noms de domaines, produits, logiciels, images, vidéos,
          textes ou plus généralement toute information objet de droits de
          propriété intellectuelle sont et restent la propriété exclusive du
          vendeur. Aucune cession de droits de propriété intellectuelle n’est
          réalisée au travers des présentes CGV. Toute reproduction totale ou
          partielle, modification ou utilisation de ces biens pour quelque motif
          que ce soit est strictement interdite.
        </p>

        <p>Article 13 : Force majeure</p>

        <p>
          L’exécution des obligations du vendeur au terme des présentes est
          suspendue en cas de survenance d’un cas fortuit ou de force majeure
          qui en empêcherait l’exécution. Le vendeur avisera le client de la
          survenance d’un tel évènement dès que possible.
        </p>

        <p>Article 14 : nullité et modification du contrat</p>

        <p>
          Si l’une des stipulations du présent contrat était annulée, cette
          nullité n’entraînerait pas la nullité des autres stipulations qui
          demeureront en vigueur entre les parties. Toute modification
          contractuelle n’est valable qu’après un accord écrit et signé des
          parties.
        </p>

        <p>Article 15 : Protection des données personnelles</p>

        <p>
          Conformément à la Loi Informatique et Libertés du 6 janvier 1978, vous
          disposez des droits d’interrogation, d’accès, de modification,
          d’opposition et de rectification sur les données personnelles vous
          concernant. En adhérant à ces conditions générales de vente, vous
          consentez à ce que nous collections et utilisions ces données pour la
          réalisation du présent contrat. En saisissant votre adresse email sur
          l’un des sites de notre réseau, vous recevrez des emails contenant des
          informations et des offres promotionnelles concernant des produits
          édités par la Société et de ses partenaires.
        </p>

        <p>Article 16 : Droit applicable</p>

        <p>
          Toutes les clauses figurant dans les présentes conditions générales de
          vente, ainsi que toutes les opérations d’achat et de vente qui y sont
          visées, seront soumises au droit français.
        </p>

        <p className="textFont text-white">
          Fondées en septembre 2016, les éditions divergences s’attachent à
          publier des ouvrages de critique sociale et politique. Quel que soit
          l’angle par lequel ils abordent le réel nos livres cherchent à
          comprendre et à rendre intelligible le monde dans lequel nous vivons,
          à le combattre et en imaginer de nouveaux, plus beaux, plus justes et
          plus désirables.
        </p>

        <p className="textFont text-white">
          Fondées en septembre 2016, les éditions divergences s’attachent à
          publier des ouvrages de critique sociale et politique. Quel que soit
          l’angle par lequel ils abordent le réel nos livres cherchent à
          comprendre et à rendre intelligible le monde dans lequel nous vivons,
          à le combattre et en imaginer de nouveaux, plus beaux, plus justes et
          plus désirables.
        </p>
        </Col>
      </Row>
   </Container>
  </Layout>
);

export default plusDinfo;
