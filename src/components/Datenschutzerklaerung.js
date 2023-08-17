import React from "react";
import { DataContext } from "../DataContext";
import { useContext } from "react";
import GoogleAnalytics from "./Services/GoogleAnalytics";
import MSDynamics from "./Services/MSDynamics";
import Matomo from "./Services/Matomo";
import '../css/Datenschutz.css';
import Cloudflare from "./Services/Cloudflare";
import CopyBanner from "./CopyBanner";
import Mailchimp from "./Services/Mailchimp";
import Pipedrive from "./Services/Pipedrive";

const Datenschutzerklaerung = ({ status , context}) => {
    console.log(context);
    const currentYear = new Date().getFullYear();
    return (
        <div id="datenschutz-container">
            <CopyBanner status={status} />
            <div id='datenschutz-document' className={status ? 'green' : ""}>
                <h1>Datenschutzerklärung der {context.companyName}</h1>
                <h2>1.  Worum geht es in dieser Datenschutzerklärung?</h2>
                <p>Die {context.companyName} (nachstehend auch «wir», «uns») beschafft und bearbeitet Personendaten, die Sie oder auch andere Personen (sog. «Dritte») betreffen. Wir verwenden den Begriff «Daten» hier gleichbedeutend mit «Personendaten» oder «personenbezogene Daten». </p>
                <h4>Info</h4>
                <p>Mit «Personendaten» sind Daten gemeint, die sich auf bestimmte oder bestimmbare Person beziehen, d.h. die Rückschlüsse auf deren Identität sind anhand Daten selbst oder mit entsprechenden Zusatzdaten möglich. «Besonders schützenswerte Personendaten» sind eine Kategorie von Personendaten, die das geltende Datenschutzrecht besonders schützt. Als besonders schützenswerte Personendaten gelten z.B. Daten, aus denen die rassische und ethnische Herkunft hervorgeht, ferner Gesundheitsdaten, Angaben über religiöse oder weltanschauliche Überzeugungen, biometrische Daten zu Identifikationszwecken und Angaben über die Gewerkschaftszugehörigkeit. In Ziff. 3 finden Sie Angaben zu den Daten, die wir im Rahmen dieser Datenschutzerklärung bearbeiten. «Bearbeiten» meint jeden Umgang mit Personendaten, z.B. das Beschaffen, Speichern, Verwenden, Anpassung, Bekanntgeben und Löschen.</p>
                <p>In dieser Datenschutzerklärung beschreiben wir, was wir mit Ihren Daten tun, wenn Sie {context.url}, andere Websites von uns oder unsere Apps verwenden (nachfolgend gesamthaft «Website»), unsere Dienstleistungen oder Produkte beziehen, anderweitig mit uns im Rahmen eines Vertrags in Verbindung stehen, mit uns kommunizieren oder sonst mit uns zu tun haben. Gegebenenfalls werden wir Sie durch eine rechtzeitige schriftliche Mitteilung über zusätzliche, nicht in dieser Datenschutzerklärung erwähnte Bearbeitungsaktivitäten informieren. Zusätzlich können wir Sie über die Bearbeitung Ihrer Daten separat informieren, z.B. in Einwilligungserklärungen, Vertragsbedingungen, zusätzlichen Datenschutzerklärungen, Formularen und Hinweisen.</p>
                <p>Wenn Sie uns Daten über andere Personen wie z.B. Familienmitglieder, Arbeitskollegen etc. übermitteln bzw. bekanntgeben, gehen wir davon aus, dass Sie dazu befugt sind und dass diese Daten richtig sind. Mit der Übermittlung von Daten über Dritte bestätigen Sie dies. Bitte stellen Sie auch sicher, dass diese Dritten über diese Datenschutzerklärung informiert wurden.</p>
                <p>Diese Datenschutzerklärung ist auf die Anforderungen der EU-Datenschutz-Grundverordnung («DSGVO»), das Schweizer Datenschutzgesetz («DSG») und das revidierte Schweizer Datenschutzgesetz («revDSG») ausgelegt. Ob und inwieweit diese Gesetze anwendbar sind, hängt jedoch vom Einzelfall ab.</p>

                <h2>2.	Wer ist für die Bearbeitung Ihrer Daten verantwortlich?</h2>
                <p>Für die in dieser Datenschutzerklärung beschriebenen Datenbearbeitungen der {context.companyName} ist datenschutzrechtlich die </p>

                {context.companyName}, {context.companyPlace} (die «{context.companyName}»), verantwortlich, soweit im Einzelfall nichts Anderes kommuniziert wird.
                <h4>Info</h4>
                <p>Für jede Datenbearbeitung gibt es eine oder mehrere Stellen, welche die Verantwortung dafür tragen, dass die Bearbeitung den Vorgaben des Datenschutzrechts entspricht. Diese Stelle heisst Verantwortlicher. Sie ist bspw. dafür zuständig, Auskunftsbegehren zu beantworten (Ziff. 11) oder sicherzustellen, dass Personendaten gesichert sind und nicht unzulässig verwendet werden.
                    Auch bei den in dieser Datenschutzerklärung beschriebenen Datenbearbeitungen können weitere Stellen mitverantwortlich sein, wenn sie über den Zweck oder die Ausgestaltung mitentscheiden. Es kommen alle Gruppengesellschaften in Frage. Falls Sie Angaben zu den einzelnen Verantwortlichen für eine bestimmte Datenbearbeitung wünschen, können Sie von uns gerne im Rahmen des Auskunftsrechts (Ziff. 11) Auskunft verlangen. Die {context.companyName} bleibt ihre primäre Ansprechpartnerin, auch wenn andere Mitverantwortliche bestehen.
                    In Ziff. 3, in Ziff. 7 und in Ziff. 12 finden Sie weitere Angaben zu Dritten, mit denen wir zusammenarbeiten und die für ihre Bearbeitungen ihrerseits verantwortlich sind. Bei Fragen oder zur Ausübung Ihrer Rechte diesen Dritten gegenüber bitten wir Sie, direkt mit ihnen Kontakt aufzunehmen.
                    Eine Liste von Dritten, denen wir Daten von Ihnen weitergeben oder die mitverantwortlich für die Bearbeitung Ihrer Daten sein können, finden sie in Kapitel 12.
                </p>
                <p>Sie können uns für Ihre Datenschutzanliegen und die Ausübung Ihrer Rechte gemäss Ziff. 11 wie folgt erreichen:</p>
                <ul>
                    <li>{context.companyName}</li>
                    <li>{context.companyAddress}</li>
                    <li>CH-{context.companyPLZ} {context.companyPlace}</li>
                    <li>{context.eMail}</li>

                </ul>

                <p>Wir haben folgende zusätzlichen Stellen eingesetzt:</p>
                <ul>
                    <li>Datenschutzbeauftragter gemäss Art. 37 ff. DSGVO:<br></br>
                        {context.companyName}<br></br>
                        {context.datenschutzbeauftragter}<br></br>
                        {context.companyAddress}<br></br>
                        CH-{context.companyPLZ} {context.companyPlace}<br></br>
                        {context.eMail}</li>

                    <li>Datenschutzberater gemäss Art. 10 revDSG:<br></br>
                        {context.companyName}<br></br>
                        {context.datenschutzbeauftragter}<br></br>
                        {context.companyAddress}<br></br>
                        CH-{context.companyPLZ} {context.companyPlace}<br></br>
                        {context.eMail}</li>

                </ul>
                <p>Sie können für Datenschutzanliegen auch diese Stellen kontaktieren.</p>
                <h2>3.	Welche Daten bearbeiten wir?</h2>
                <p>Wir bearbeiten verschiedene Kategorien von Daten über Sie. Die wichtigsten Kategorien sind folgende:</p>
                <ul>
                    <li><strong>Technische Daten:</strong>Wenn Sie unsere Website oder andere elektronische Angebote {context.eMail && <span>(z.B kostenloses Wlan)</span>} verwenden, erheben wir die IP-Adresse Ihres Endgeräts und weitere technische Daten, um die Funktionalität und Sicherheit dieser Angebote sicherzustellen. Zu diesen Daten gehören auch Protokolle, in denen die Verwendung unserer Systeme aufgezeichnet wird. Wir bewahren technische Daten in der Regel für {context.technischAufbewahrung} Monate auf. Um die Funktionalität dieser Angebote sicherzustellen, können wir Ihnen bzw. Ihrem Endgerät auch einen individuellen Code zuweisen (z.B. in Form eines Cookies, vgl. dazu Ziff. 12). Die technischen Daten für sich lassen grundsätzlich keine Rückschlüsse auf Ihre Identität zu. Im Rahmen von Benutzerkonten, Registrierungen, Zugangskontrollen oder der Abwicklung von Verträgen können sie jedoch mit anderen Datenkategorien (und so ggf. mit Ihrer Person) verknüpft werden. </li>
                    <h4>Info</h4>
                    <p>Zu den technischen Daten gehören u.a. die IP-Adresse und Angaben über das Betriebssystem Ihres Endgeräts, das Datum, die Region und der Zeitpunkt der Nutzung sowie der Typ des Browsers, mit dem Sie auf unsere elektronischen Angebote zugreifen. Das kann uns helfen, die richtige Formatierung der Website zu übermitteln oder Ihnen z.B. eine für Ihre Region angepasste Website anzuzeigen. Aufgrund der IP-Adresse wissen wir zwar, über welchen Provider Sie auf unsere Angebote zugreifen (und damit auch die Region), aber wir können daraus in der Regel nicht ableiten, wer Sie sind. Das ändert sich, wenn Sie z.B. ein Benutzerkonto anlegen, weil dann Personendaten mit technischen Daten verknüpft werden können (wir sehen z.B., welchen Browser Sie benutzen, um ein Konto über unsere Website zu nutzen). Beispiele für technische Daten sind auch Protokolle («Logs»), die in unseren Systemen anfallen (z.B. das Protokoll der Benutzer-Anmeldungen auf unserer Website). </p>
                    <li><strong>Registrierungsdaten:</strong> Bestimmte Angebote z.B. von {context.registrierungWettbewerbe && <span>Wettbewerben und</span>}  Dienstleistungen (z.B. {context.registrierungLogin && <span>Login-Bereiche unserer Website,</span>}  {context.registrierungNewsletter && <span>Newsletter-Versand,</span>} {context.technischWlan && <span>kostenloser WLAN-Zugang etc.</span>}  ) können nur mit einem Benutzerkonto oder einer Registrierung genutzt werden, die direkt bei uns oder über unsere externen Login-Dienstleister erfolgen kann. Dabei müssen Sie uns bestimmte Daten angeben, und wir erheben Daten über die Nutzung des Angebots oder der Dienstleistung. Bei Zugangskontrollen zu bestimmten Anlagen können Registrierungsdaten anfallen; je nach Kontrollsystem auch biometrische Daten. Wir bewahren Registrierungsdaten in der Regel während {context.registrierungAufbewahrung} Monaten nach dem Ende der Nutzung der Dienstleistung oder der Auflösung des Nutzerkontos auf. </li>

                    <li><strong>Kommunikationsdaten:</strong>Wenn Sie mit uns über das Kontaktformular, per E-Mail{context.kommunikationChat && <span>, Chat</span>} oder Telefon,
                        brieflich oder über sonstige Kommunikationsmittel in Kontakt stehen, erfassen wir die zwischen Ihnen und uns ausgetauschten Daten, einschliesslich Ihrer Kontaktdaten
                        und der Randdaten der Kommunikation.
                        {context.kommunikationRecording && <span>
                            Wenn wir Telefongespräche oder Video-Konferenzen z.B. zu Schulungs- und Qualitätssicherungszwecken aufzeichnen oder mithören,
                            weisen wir Sie besonders darauf hin. Solche Aufzeichnungen dürfen nur entsprechend unseren internen Vorgaben gemacht und verwendet werden. Sie werden darüber informiert,
                            ob und wann solche Aufzeichnungen stattfinden, z.B. durch eine Anzeige während der betreffenden Video-Konferenz. Falls Sie keine Aufzeichnung wünschen, weisen Sie uns bitte
                            darauf hin oder beenden Sie Ihre Teilnahme. Möchten Sie lediglich keine Aufzeichnung Ihres Bildes, schalten Sie bitte Ihre Kamera aus. </span>}

                        Wenn wir Ihre Identität feststellen wollen oder müssen, z.B. bei einem von Ihnen gestellten Auskunftsbegehren, einem Antrag für Medienzugang etc., erheben wir Daten, um Sie zu identifizieren (z.B. eine Kopie eines Ausweises).
                        Wir bewahren diese Daten in der Regel während {context.kommunikationAufbewahrungIdentitaet} Monaten ab dem letzten Austausch mit Ihnen auf. Diese Frist kann länger sein, soweit dies aus Beweisgründen oder zur
                        Einhaltung gesetzlicher oder vertraglicher Vorgaben erforderlich oder technisch bedingt ist. E-Mails in persönlichen Postfächern und schriftliche Korrespondenzen werden in der
                        Regel mindestens {context.kommunikationAufbewahrungMail} Jahre aufbewahrt.

                        {context.kommunikationAufbewahrungRecordings && <span>Aufzeichnungen von (Video-)Konferenzen werden in der Regel während </span>} {context.kommunikationAufbewahrungRecordings} {context.kommunikationAufbewahrungRecordings && <span> Monaten aufbewahrt. </span>}
                        {context.kommunikationChat && <span>Chats werden in der Regel während </span>}{context.kommunikationAufbewahrungChats}  {context.kommunikationChat && <span> Jahren aufbewahrt. </span>}
                    </li>
                    <h4>Info</h4>
                    <p><strong>Kommunikationsdaten</strong> sind Ihr Name und Ihre Kontaktangaben, die Art und Weise und der Ort und die Zeit der Kommunikation und i.d.R. auch ihr Inhalt (d.h. der Inhalt von E-Mails, Briefen, Chats etc.). Diese Daten können auch Angaben über Dritte enthalten. Zum Zweck der Identifikation können wir auch Ihre Ausweisnummer oder ein von Ihnen festgelegtes Passwort oder Ihren Presseausweis bearbeiten. Zur sicheren Identifikation sind bei Medienanfragen folgende Pflichtangaben zu machen: Verlag, Name der Publikation, Anrede, Vorname, Nachname, Postanschrift, E-Mail-Adresse und Telefonnummer der berichterstattenden Person.</p>

                    <li><strong>Stammdaten</strong> Als Stammdaten bezeichnen wir die Grunddaten, die wir nebst den Vertragsdaten (siehe unten) für die Abwicklung unserer vertraglichen und sonstigen geschäftlichen
                        Beziehungen oder für Marketing- und Werbezwecke benötigen, wie Name, Kontaktdaten und Informationen z.B. über Ihre Rolle und Funktion, Ihre Bankverbindung(en), Ihr Geburtsdatum, die Kundenhistorie,
                        Vollmachten, Unterschriftsberechtigungen und Einwilligungserklärungen. Ihre Stammdaten bearbeiten wir, wenn Sie ein Kunde oder sonstiger geschäftlicher Kontakt sind oder für einen solchen tätig
                        sind (z.B. als Kontaktperson des Geschäftspartners), oder weil wir Sie für unsere eigenen Zwecke oder die Zwecke eines Vertragspartners ansprechen wollen (z.B. im Rahmen von Marketing und Werbung,
                        {context.stammEvents && <span>mit Einladungen an Anlässe,</span>}
                        {context.stammGutscheine && <span>mit Gutscheinen, </span>}
                        {context.stammNewsletter && <span>mit Newslettern </span>}
                        etc.).
                        Wir erhalten Stammdaten von Ihnen selbst (z.B. bei einem Kauf oder im Rahmen einer Registrierung), von Stellen, für die Sie tätig sind, oder von Dritten wie z.B. unseren Vertragspartnern,
                        Verbänden und Adresshändlern und aus öffentlich zugänglichen Quellen wie z.B. öffentlichen Registern oder dem Internet (Websites, Social Media etc.). Wir können im Rahmen von Stammdaten auch
                        Gesundheitsdaten und Angaben über Dritte bearbeiten. Stammdaten können wir auch von unseren Aktionären und Anlegern erheben. Wir bewahren diese Daten in der Regel während
                        {context.stammAufbewahrung} Jahren ab dem letzten Austausch mit Ihnen auf, mindestens aber ab Vertragsende. Diese Frist kann länger sein, soweit dies aus Beweisgründen oder zur Einhaltung gesetzlicher oder
                        vertraglichen Vorgaben erforderlich oder technisch bedingt ist.</li>
                    <h4>Info</h4>
                    <p>Zu den Stammdaten gehören z.B. Daten wie Name, Adresse, E-Mail-Adresse, Telefonnummer und andere Kontaktdaten, Geschlecht, Geburtsdatum, Nationalität, Angaben zu verbundenen Personen, Websites, Profile in Social Media, Fotos und Videos, Kopien von Ausweisen; ferner Angaben über Ihre Beziehung mit uns (Kunde, Lieferant, Besucher, Leistungsempfänger etc.), Angaben zu Ihrem Status bei uns, Zuteilungen, Klassifikationen und Verteiler, Angaben über unsere Interaktionen mit Ihnen (allenfalls eine Historie davon mit entsprechenden Eintragungen), Berichte (z.B. aus den Medien) oder behördliche Dokumente, (z.B. Handelsregisterauszüge, Bewilligungen etc.), die Sie betreffen. Als Zahlungsangaben erheben wir z.B. Ihre Bankverbindung, Kontonummer und Kreditkartendaten. Auch Einwilligungs- oder Sperrvermerke gehören zu den Stammdaten, ebenso wie Angaben über Dritte, z.B. Kontaktpersonen, Empfänger von Leistungen, Werbeempfänger oder Vertreter.
                        Bei Kontaktpersonen und Vertretern unserer Kunden, Lieferanten und Partner bearbeiten wir als Stammdaten z.B. Name und Adresse, Angaben zu Rolle, zur Funktion im Unternehmen, Qualifikationen und ggf. Angaben über Vorgesetzte, Mitarbeitende und Untergebene und Angaben über Interaktionen mit diesen Personen.
                        Stammdaten werden nicht für alle Kontakte umfassend erhoben. Welche Daten wir im Einzelnen erheben, hängt besonders vom Zweck der Bearbeitung ab.
                    </p>

                    <li><strong>Vertragsdaten:</strong>Das sind Daten, die im Zusammenhang mit einem Vertragsschluss bzw. der Vertragsabwicklung anfallen,
                        z.B. Angaben über Verträge und den zu erbringenden oder erbrachten Leistungen, sowie Daten aus dem Vorfeld eines Ver-tragsabschlusses, die zur Abwicklung erforderlichen oder verwendeten
                        Angaben und Angaben über Reaktionen {context.vertragReaktionen && <span>(z.B. Beschwerden oder Angaben zur Zufriedenheit etc.)</span>}.
                        Diese Daten erheben wir i.d.R. von Ihnen, von Vertragspartnern und von in die Abwicklung des Vertrages involvierten Dritten, aber auch von Drittquellen (z.B. Anbietern von Bonitätsdaten) und
                        aus öffentlich zugänglichen Quellen. Wir bewahren diese Daten in der Regel während {context.vertragAufbewahrung} Jahren ab der letzten Vertragsaktivität auf, mindestens aber ab Vertragsende. Diese Frist kann länger
                        sein, soweit dies aus Beweisgründen oder zur Einhaltung gesetzlicher oder vertraglichen Vorgaben erforderlich oder technisch bedingt ist.</li>

                    <li><strong>Verhaltens- und Präferenzdaten:</strong> nachdem, in welcher Beziehung wir zu Ihnen stehen, versuchen wir Sie kennenzulernen und unsere Produkte, Dienstleistungen und Angebote besser
                        auf Sie auszurichten. Dazu erheben und nutzen wir Daten über Ihr Verhalten und Ihre Präferenzen. Wir tun dies, indem wir Angaben über Ihr Verhalten in unserem Bereich auswerten, und wir können diese
                        Angaben auch mit Angaben von Dritten – auch aus öffentlich zugänglichen Quellen – ergänzen. Gestützt darauf können wir etwa die Wahrscheinlichkeit berechnen, dass Sie be-stimmte Leistungen in Anspruch
                        nehmen oder sich auf eine bestimmte Weise verhalten. {context.verhaltenBewegungsprofil && <span>Die dazu bearbeiteten Daten sind uns teilweise bereits bekannt (z.B. wenn Sie unsere Leistungen in Anspruch nehmen), oder wir gewinnen diese Daten,
                            indem wir Ihr Verhalten aufzeichnen (z.B. wie Sie auf unserer Website navigieren oder indem wir z.B. über die Verwendung Ihres Mobiltelefons Ihr Bewegungsprofil ermitteln)</span>} Wir anonymisieren oder löschen
                        diese Daten, wenn sie für die verfolgten Zwecke nicht mehr aussagekräftig sind, was je nach der Art der Daten zwischen {context.verhaltenAufbewahrungBewegung} Wochen (bei Bewegungsprofilen) und
                        {context.verhaltenAufbewahrung} Monaten (bei Produkte- und Dienstleistungspräferenzen)
                        der Fall sein kann. Diese Frist kann länger sein, soweit dies aus Beweisgründen oder zur Einhaltung gesetzlicher oder vertraglichen Vorgaben erforderlich oder technisch bedingt ist. Wie das Tracking auf unserer Website
                        funktioniert, beschreiben wir in Ziff. 12. </li>

                    <li><strong>Sonstige Daten:</strong> von Ihnen erheben wir auch in anderen Situationen. Im Zusammenhang mit behördlichen oder gerichtlichen Verfahren etwa fallen Daten an (wie Akten, Beweismittel etc.),
                        die sich auch auf Sie beziehen können. Aus Gründen des Gesundheitsschutzes können wir ebenfalls Daten erheben (z.B. im Rahmen von Schutzkonzepten). Wir können Fotos, Videos und Tonaufnahmen erhalten oder herstellen,
                        in denen Sie erkennbar sein können (z.B. an Anlässen, durch Sicherheitskameras etc.). Wir können auch Daten darüber erheben, wer wann bestimmte Gebäude betritt oder entsprechende Zugangsrechte hat
                        (inkl. bei Zugangskontrollen, gestützt auf Registrierungsdaten oder Besucherlisten etc.), wer wann an Anlässen oder Aktionen teilnimmt oder wer wann unsere Infrastruktur und Systeme verwendet.
                        Die Aufbewahrungsfrist dieser Daten richtet sich nach dem Zweck und wird auf das Erforderliche beschränkt. Das reicht von einigen wenigen Tagen bei vielen der Sicherheitskameras
                        und in der Regel einigen Wochen bei Daten für ein Contact Tracing über Besucherdaten, die in der Regel während {context.sonstigeEventsTracing} Monaten aufbewahrt werden bis hin zu Berichten über Anlässe mit Bildern,
                        die einige Jahre oder länger aufbewahrt werden können. </li>

                    <p>Vieler der in dieser Ziff. 3 genannten Daten geben Sie uns selbst bekannt (z.B. über Formulare, im Rahmen der Kommunikation mit uns, im Zusammenhang mit Verträgen, bei der Verwendung der Website etc.).
                        Sie sind dazu nicht verpflichtet, unter Vorbehalt von Einzelfällen, z.B. im Rahmen von verbindlichen Schutzkonzepten (gesetzliche Verpflichtungen). Wenn Sie mit uns Verträge schliessen oder Leistungen
                        beanspruchen wollen, müssen Sie uns zudem im Rahmen Ihrer vertraglichen Verpflichtung gemäss dem einschlägigen Vertrag Daten bereitstellen, insbesondere Stamm-, Vertrags- und Registrierungsdaten.
                        Bei der Nutzung unserer Website ist die Bearbeitung technischer Daten unvermeidlich. Wenn Sie Zugang zu bestimmten Systemen oder Gebäuden erhalten möchten, müssen Sie uns Registrierungsdaten angeben.
                        Bei Verhaltens- und Präferenzdaten haben Sie jedoch grundsätzlich die Möglichkeit, zu widersprechen oder keine Einwilligung zu geben.</p>
                  
                    <p>Soweit dies nicht unzulässig ist, entnehmen wir Daten auch öffentlich zugänglichen Quellen (z.B. Betreibungsregister, Grundbücher, Handelsregister, Medien oder dem Internet inkl. Social Media) oder erhalten Daten von anderen Unternehmen innerhalb unserer Gruppe, von Behörden und von sonstigen Dritten (wie z.B. Kreditauskunfteien, Adresshändler, Verbände, Vertragspartner, Internet-Analysedienste etc.). </p>
                    </ul>
                    <h2>4.	Zu welchen Zwecken bearbeiten wir Ihre Daten?</h2>
                    <p>Wir bearbeiten Ihre Daten zu den Zwecken, die wir im Folgenden erläutern. Weitere Hinweise für den OnlineBereich finden Sie in Ziff. 12 und 13. Diese Zwecke bzw. die ihnen zugrundeliegenden Ziele stellen berechtigte Interessen von uns und ggf. von Dritten dar. Sie finden weitere Angaben zu den Rechtsgrundlagen unserer Bearbeitung in Ziff. 5.</p>
                    <p>Wir bearbeiten Ihre Daten zu Zwecken im Zusammenhang mit der <strong>Kommunikation mit Ihnen</strong> , insbesondere zur Beantwortung von Anfragen und der Geltendmachung Ihrer Rechte (Ziff. 11) und um Sie bei Rückfragen zu kontaktieren. Hierzu verwenden wir insbesondere Kommunikationsdaten und Stammdaten und im Zusammenhang mit von Ihnen genutzten Angeboten und Dienstleistungen auch Registrierungsdaten. Wir bewahren diese Daten auf, um unsere Kommunikation mit Ihnen zu dokumentieren, für Schulungszwecke, zur Qualitätssicherung und für Nachfragen. </p>
                    <p>Daten bearbeiten wir für die Aufnahme, Verwaltung und Abwicklung von <strong>Vertragsbeziehungen.</strong></p>
                    <p>Wir bearbeiten Daten für<strong>Marketingzwecke</strong>und zur<strong>Beziehungspflege</strong>, z.B. um unseren Kunden und anderen Vertragspartnern personalisierte Werbung zu Produkten und Dienstleistungen von uns und von Dritten (z.B. von WerbeVertragspartnern) zu senden. Das kann z.B. in Form von Newslettern und anderen regelmässigen Kontakten (elektronisch, per Post, telefonisch), über andere Kanäle, für welche wir von Ihnen Kontaktinformationen haben, aber auch im Rahmen von einzelnen Marketingaktionen (z.B. Anlässe, Wettbewerbe etc.) erfolgen und auch Gratisleistungen enthalten (z.B. Einladungen, Gutscheine etc.). Sie können solche Kontakte jederzeit ablehnen (siehe am Ende dieser Ziff. 4) bzw. eine Einwilligung in die Kontaktaufnahme für Werbezwecke verweigern oder widerrufen. Mit Ihrer Einwilligung können wir unsere Online-Werbung im Internet zielgerichteter auf Sie ausrichten (dazu Ziff. 12). Schliesslich wollen wir auch Vertragspartnern von uns ermöglichen, unsere Kunden und andere Vertragspartner zu Werbezwecken anzusprechen (dazu Ziff. 7).</p>
                    <p>Ihre Daten bearbeiten wir weiter zur <strong>Marktforschung</strong>, zur <strong>Verbesserung unserer Dienstleistungen und unseres Betriebs</strong> und zur <strong>Produktentwicklung</strong>.</p>
                    <p>Wir können Ihre Daten auch zu <strong>Sicherheitszwecken</strong> und für die <strong>Zugangskontrolle</strong> bearbeiten. </p>
                    <p>Wir bearbeiten Personendaten zur <strong>Einhaltung von Gesetzen, Weisungen und Empfehlungen von Behörden und interner Regularien («Compliance»)</strong>. </p>
                    <p>Wir bearbeiten Daten auch für Zwecke unseres <strong>Risikomanagements</strong>und im Rahmen einer umsichtigen <strong>Unternehmensführung</strong>, einschliesslich Betriebsorganisation und Unternehmensentwicklung. </p>
                    <p>Wir können Ihre Daten <strong>zu weiteren Zwecken bearbeiten</strong>, z.B. im Rahmen unserer internen Abläufe und Administration oder zu Schulungs- und Qualitätssicherungszwecken.</p>
                    <h2>5.	Auf welcher Grundlage bearbeiten wir Ihre Daten?</h2>
                    <p>Soweit wir Sie für bestimmte Bearbeitungen um Ihre <strong>Einwilligung</strong> bitten (z.B. für die Bearbeitung von besonders schützenswerten Personendaten, für Marketingmailings, für die Erstellung personalisierter Bewegungsprofile und für die Werbesteuerungs- und Verhaltensanalyse auf der Website), informieren wir Sie gesondert über die entsprechenden Zwecke der Bearbeitung. Einwilligungen können Sie jederzeit durch schriftliche Mitteilung (postalisch) oder, wo nicht anders angegeben oder vereinbart, per E-Mail an uns jederzeit mit Wirkung für die Zukunft widerrufen; unsere Kontaktangaben finden Sie in Ziff. 2. Für den Widerruf Ihrer Einwilligung beim Online-Tracking vgl. Ziff. 12. Wo Sie über ein Benutzerkonto verfügen, kann ein Widerruf oder eine Kontaktnahme mit uns ggf. auch über die betreffende Website oder sonstige Dienstleistung durchgeführt werden. Sobald wir die Mitteilung über den Widerruf Ihrer Einwilligung erhalten haben, werden wir Ihre Daten nicht mehr für die Zwecke bearbeiten, denen Sie ursprünglich zugestimmt haben, es sei denn, wir haben eine andere Rechtsgrundlage dafür. Durch den Widerruf Ihrer Einwilligung wird die Rechtmässigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Bearbeitung nicht berührt.</p>
                    <p>Wo wir Sie nicht um Ihre Einwilligung für eine Bearbeitung bitten, stützen wir die Bearbeitung Ihrer Personendaten darauf, dass die Bearbeitung für die <strong>Anbahnung oder Abwicklung eines Vertrags</strong> mit Ihnen (oder der von Ihnen vertretenen Stelle) erforderlich ist oder dass wir oder Dritte ein <strong>berechtigtes Interesse</strong> daran haben, so insbesondere um die vorstehend unter Ziff. 4 beschriebenen Zwecke und damit verbundenen Ziele zu verfolgen und entsprechende Massnahmen durchführen zu können. Zu unseren berechtigten Interessen gehört auch die Einhaltung von <strong>gesetzlichen Vorschriften</strong>, soweit diese nicht ohnehin bereits vom jeweils anwendbaren Datenschutzrecht als Rechtsgrundlage anerkannt ist (z.B. bei der DSGVO das Recht im EWR und in der Schweiz). Dazu gehört aber auch die Vermarktung unserer Produkte und Dienstleistungen, das Interesse, unsere Märkte besser zu verstehen und unser Unternehmen, einschliesslich des operativen Betriebs, sicher und effizient zu führen und weiterzuentwickeln.</p>
                    <p>Wenn wir sensible Daten erhalten (z.B. Gesundheitsdaten, Angaben zu politischen, religiösen oder weltanschaulichen Ansichten oder biometrische Daten zur Identifikation), können wir Ihre Daten auch gestützt auf andere Rechtsgrundlagen bearbeiten, z.B. im Falle von Auseinandersetzungen aufgrund der Notwendigkeit der Bearbeitung für einen etwaigen Prozess oder die Durchsetzung oder Abwehr von <strong>Rechtsansprüchen</strong>. In Einzelfällen können andere Rechtsgründe zum Tragen kommen, was wir Ihnen soweit erforderlich separat kommunizieren.</p>
            
                <h2>6.	Was gilt bei Profiling und automatisierten Einzelentscheiden?</h2>
                <p>Wir können bestimmte Ihrer persönlichen Eigenschaften zu den in Ziff. 4 genannten Zwecken anhand Ihrer Daten (Ziff. 3) automatisiert bewerten («Profiling»), wenn wir Präferenzdaten ermitteln wollen, aber auch um Missbrauchs und Sicherheitsrisiken festzustellen, statistische Auswertungen vorzunehmen oder für betriebliche Planungszwecke. Zu denselben Zwecken können wir auch Profile erstellen, d.h. wir können Verhaltens und Präferenzdaten, aber auch Stamm- und Vertragsdaten und Ihnen zugeordnete technische Daten kombinieren, um Sie als Person mit ihren unterschiedlichen Interessen und sonstigen Eigenschaften besser zu verstehen. Wir können aber auch anonyme und – mit Ihrer Einwilligung – auch personalisierte Bewegungsprofile von Ihnen erstellen. </p>
                <p>In beiden Fällen achten wir auf die Verhältnismässigkeit und Zuverlässigkeit der Ergebnisse und treffen Massnahmen gegen eine missbräuchliche Verwendung dieser Profile oder eines Profiling. Können diese Rechtswirkungen oder erhebliche Nachteile für Sie mit sich bringen, sehen wir grundsätzlich eine manuelle Überprüfung vor.
                    In bestimmten Situationen kann es aus Gründen der Effizienz und Einheitlichkeit von Entscheidungsprozessen erforderlich sein, dass wir Sie betreffende Ermessensentscheide mit Rechtswirkungen oder möglicherweise erheblichen Nachteilen automatisieren («automatisierte Einzelentscheide»). Wir werden Sie in diesem Fall entsprechend informieren und die nach anwendbarem Recht erforderlichen Massnahmen vorsehen.
                </p>

                <h2>7.	Wem geben wir Ihre Daten bekannt?</h2>
                <p>Im Zusammenhang mit unseren Verträgen, der Website, unseren Dienstleistungen und Produkten, unseren rechtlichen Pflichten oder sonst zur Wahrung unserer berechtigten Interessen und den weiteren in Ziff. 4 aufgeführten Zwecken übermitteln wir Ihre Personendaten auch an Dritte, insbesondere an die folgenden Kategorien von Empfängern: </p>

                <ul>
                     <li><strong>Dienstleister:</strong> Wir arbeiten mit Dienstleistern im In und Ausland zusammen, die in unserem Auftrag oder in gemeinsamer Verantwortlichkeit mit uns Daten über Sie bearbeiten oder in eigener 
                     Verantwortlichkeit Daten über Sie von uns erhalten (z.B. IT-Provider, Versandunternehmen, Werbedienstleister, Login-Dienstleister, Reinigungsunternehmen, Bewachungsunternehmen, Banken, Versicherungen,
                      Inkassofirmen, Wirtschaftsauskunfteien, oder Adressprüfer). Dazu können auch Gesundheitsdaten gehören. </li>
                    <li><strong>Vertragspartner inklusive Kunden:</strong> Gemeint sind zunächst die Kunden (z.B. Leistungsbezüger) und anderen Vertragspartner von uns, weil sich diese Datenübermittlung 
                    aus diesen Verträgen ergibt. Sie erhalten z.B. Registrierungsdaten zu ausgegebenen und eingelösten Gutscheinen, Einladungen etc. Wenn Sie für einen solchen Vertragspartner selbst tätig sind, 
                    können wir diesem auch in diesem Zusammenhang Daten über Sie übermitteln. Dazu können auch Gesundheitsdaten gehören. Zu den Empfängern gehören weiter Vertragspartner, mit denen wir ko-operieren 
                    oder die für uns Werbung treiben und denen wir deshalb Daten über Sie für Analyse- und Marketingzwecke übermitteln (das können wiederum Leistungsbezüger sein, aber z.B. auch Sponsoren und Anbieter von Online-Werbung). 
                    Wir verlangen von diesen Partnern, dass Sie Ihnen nur dann Werbung zusenden oder basierend auf Ihren Daten ausspielen, wenn Sie dem zugestimmt haben (für den Online-Bereich vgl. Ziff. 12).</li>
                    <li><strong>Behörden:</strong> Wir können Personendaten an Ämter, Gerichte und andere Behörden im In- und Ausland weitergeben, wenn wir dazu rechtlich verpflichtet oder berechtigt sind oder dies zur Wahrung unserer Interessen als erforderlich erscheint. Dazu können auch Gesundheitsdaten gehören. Die Behörden bearbeiten in eigener Verantwortlichkeit Daten über Sie, die sie von uns erhalten.</li>
                    <li><strong>Weitere Personen:</strong> Gemeint sind andere Fällen, wo sich der Einbezug von Dritten aus den Zwecken gemäss Ziff. 4 ergibt, z.B. Leistungsempfänger, Medien und Vereine, an denen wir mitwirken oder wenn Sie Teil einer unserer Publikationen sind. </li>
                </ul>
                <p>Alle diese Kategorien von Empfängern können ihrerseits Dritte beiziehen, so dass Ihre Daten auch diesen zugänglich werden können. Die Bearbeitung durch bestimmte Dritte können wir beschränken (z.B. IT-Provider), jene anderer Dritter aber nicht (z.B. Behörden, Banken etc.).</p>
                <p>Wir behalten uns diese Datenbekanntgaben auch dann vor, wenn sie <strong>geheime Daten</strong> betreffen (es sei denn, wir haben mit Ihnen ausdrücklich vereinbart, dass wir diese Daten nicht an bestimmte Dritte weitergeben, es sei denn wir wären dazu gesetzlich verpflichtet). Ungeachtet dessen unterstehen Ihre Daten auch nach einer Bekanntgabe in der Schweiz und im restlichen Europa weiterhin einem angemessenen Datenschutz. Für die Bekanntgabe in andere Länder gelten die Bestimmungen von Ziff. 8. Möchten Sie nicht, dass bestimmte Daten weitergegeben werden, teilen Sie uns dies bitte mit, damit wir prüfen können, ob und inwieweit wir Ihnen entgegenkommen können (Ziff. 2).</p>
                <strong>Wir ermöglichen auch bestimmten Dritten, auf unserer Website und bei Anlässen von uns ihrerseits Personendaten von Ihnen zu erheben (z.B. Medienfotografen, Anbieter von Tools, die wir auf unserer Website eingebunden haben etc.). Soweit wir nicht in entscheidender Weise an diesen Datenerhebungen beteiligt sind, sind diese Dritten alleine dafür verantwortlich. Bei Anliegen und zur Geltendmachung Ihrer Datenschutzrechte wenden Sie sich bitte direkt an diese Dritten. Vgl. Ziff. 12 für die Website.</strong>
                <h2>8.	Gelangen Ihre Personendaten auch ins Ausland?</h2>
                <p>Wie in Ziff. 7 erläutert, geben wir Daten auch anderen Stellen bekannt. Diese befinden sich nicht nur in der Schweiz. Ihre Daten können daher sowohl in Europa als auch in anderen Ländern der Welt bearbeitet werden; in Ausnahmefällen aber in jedem Land der Welt. </p>
                <p>Befindet sich ein Empfänger in einem Land ohne angemessenen gesetzlichen Datenschutz, verpflichten wir den Empfänger vertraglich zur Einhaltung des anwendbaren Datenschutzes (dazu verwenden wir die revidierten Standardvertragsklauseln der Europäischen Kommission, die hier: https://eurlex.europa.eu/eli/dec_impl/2021/914/oj? abrufbar sind), soweit er nicht bereits einem gesetzlich anerkannten Regelwerk zur Sicherstellung des Datenschutzes unterliegt und wir uns nicht auf eine Ausnahmebestimmung stützen können. Eine Ausnahme kann namentlich bei Rechtsverfahren im Ausland gelten, aber auch in Fällen überwiegender öffentlicher Interessen oder wenn eine Vertragsabwicklung eine solche Bekanntgabe erfordert, wenn Sie eingewilligt haben oder wenn es sich um von Ihnen allgemein zugänglich gemachte Daten handelt, deren Bearbeitung Sie nicht widersprochen haben. </p>
                <p>Beachten Sie bitte auch, dass Daten, die über das Internet ausgetauscht werden, häufig über Drittstaaten geleitet werden. Ihre Daten können daher auch dann ins Ausland gelangen, wenn sich Absender und Empfänger im gleichen Land befinden.</p>
                <h2>9.	Wie lange bearbeiten wir Ihre Daten?</h2>
                <p>Wir bearbeiten Ihre Daten so lange, wie es unsere Bearbeitungszwecke, die gesetzlichen Aufbewahrungsfristen und unsere berechtigten Interessen der Bearbeitung zu Dokumentations und Beweiszwecken es verlangen oder eine Speicherung technisch bedingt ist. Weitere Angaben zur jeweiligen Speicher und Bearbeitungsdauer finden Sie jeweils bei den einzelnen Datenkategorien in Ziff.  3 bzw. bei den Cookie-Kategorien in Ziff. 12. Ste-hen keine rechtlichen oder vertraglichen Pflichten entgegen, löschen oder anonymisieren wir Ihre Daten nach Ablauf der Speicher- oder Bearbeitungsdauer im Rahmen unserer üblichen Abläufe.</p>
                <h2>10.	Wie schützen wir Ihre Daten?</h2>
                <p>Wir treffen angemessene Sicherheitsmassnahmen, um die Vertraulichkeit, Integrität und Verfügbarkeit Ihrer Personendaten zu wahren, um sie gegen unberechtigte oder unrechtmässige Bearbeitungen zu schützen und den Gefahren des Verlusts, einer unbeabsichtigten Veränderung, einer ungewollten Offenlegung oder eines unberechtigten Zugriffs entgegenzuwirken. </p>
                <h2>11.	Welche Rechte haben Sie?</h2>
                <p><strong>Das anwendbare Datenschutzrecht gewährt Ihnen unter bestimmten Umständen das Recht, der Bearbeitung Ihrer Daten zu widersprechen, insbesondere jener für Zwecke des Direktmarketings, des für Direktwerbung betriebenen Profilings und weiterer berechtigter Interessen an der Bearbeitung.</strong></p>
                <p>Um Ihnen die Kontrolle über die Bearbeitung Ihrer Personendaten zu erleichtern, haben Sie im Zusammenhang mit unserer Datenbearbeitung je nach anwendbarem Datenschutzrecht auch folgende Rechte: </p>
                <ul>
                    <li>Das Recht, von uns Auskunft zu verlangen, ob und welche Daten wir von Ihnen bearbeiten;</li>
                    <li>das Recht, dass wir Daten korrigieren, wenn sie unrichtig sind;</li>
                    <li>das Recht, die Löschung von Daten zu verlangen;</li>
                    <li>das Recht, von uns die Herausgabe bestimmter Personendaten in einem gängigen elektronischen Format oder ihre Übertragung an einen anderen Verantwortlichen zu verlangen;</li>
                    <li>das Recht, eine Einwilligung zu widerrufen, soweit unsere Bearbeitung auf Ihrer Einwilligung beruht;</li>
                    <li>das Recht auf Nachfrage weitere Informationen zu erhalten, die für die Ausübung dieser Rechte erforderlich sind;</li>
                
                </ul>

                <p><strong>Wenn Sie uns gegenüber die oben genannten Rechte ausüben wollen</strong>, wenden Sie sich bitte schriftlich, bei uns vor Ort oder, wo nicht anders angegeben oder vereinbart, per E-Mail an uns; unsere Kontaktangaben finden Sie in Ziff. 2. Damit wir einen Missbrauch ausschliessen können, müssen wir Sie identifizieren (z.B. mit einer Ausweiskopie, soweit dies nicht anders möglich ist).
                    Sie haben diese Rechte auch gegenüber anderen Stellen, die mit uns eigenverantwortlich zusammenarbeiten – wenden Sie sich bitte direkt an diese, wenn Sie Rechte im Zusammenhang mit deren Bearbeitung wahrnehmen wollen. Angaben zu unseren wichtigen Kooperationspartnern und Dienstleistern finden Sie in Ziff. 7, weitere Angaben in Ziff. 12.
                    Bitte beachten Sie, dass für diese Rechte nach dem anwendbaren Datenschutzrecht Voraussetzungen, Ausnahmen oder Einschränkungen gelten (z.B. zum Schutz von Dritten oder von Geschäftsgeheimnissen). Wir werden Sie ggf. entsprechend informieren.
                </p>

                <p>Wenn Sie mit unserem Umgang mit Ihren Rechten oder dem Datenschutz nicht einverstanden sind, teilen Sie das uns oder unseren Datenschutzbeauftragten (Ziff. 2) bitte mit. Insbesondere wenn Sie sich im EWR, im Vereinigten Königreich oder in der Schweiz befinden, haben Sie zudem das Recht, sich bei der Datenschutz-Aufsichtsbehörde Ihres Landes zu beschweren. Eine Liste der Behörden im EWR finden Sie hier: https://edpb.europa.eu/about-edpb/board/members_de. Die Aufsichtsbehörde des Ver-einigten Königreichs erreichen Sie hier: https://ico.org.uk/global/contact-us/. Die Schweizer Aufsichtsbehörde erreichen Sie hier: https://www.edoeb.admin.ch/edoeb/de/home/der-edoeb/kontakt/adresse.html.</p>

                <h2>12.	Verwenden wir Online-Tracking- und Online-Werbetechniken?</h2>
                <p>Auf unserer Website setzen wir verschiedene Techniken ein, mit denen wir und von uns beigezogenen Dritte Sie bei Ihrer Nutzung wiedererkennen und unter Umständen auch über mehrere Besuche hinweg verfolgen können. 
                    In diesem Abschnitt informieren wir Sie darüber.</p>
                <p>Im Kern geht es darum, dass wir die Zugriffe von Ihnen (über Ihr System) von Zugriffen anderer Benutzer unterscheiden können, damit wir die Funktionalität der Website sicherstellen und Auswertungen und Personalisierungen vornehmen können. Wir wollen dabei nicht auf Ihre Identität schliessen, auch wenn wir dies können, soweit wir oder von uns beigezogene Dritte Sie durch Kombination mit Registrierungsdaten identifizieren können. Auch ohne Registrierungsdaten sind die eingesetzten Techniken aber so ausgestaltet, dass Sie bei jedem Seitenaufruf als individueller Besucher erkannt werden, etwa indem unser Server (oder die Server der Dritten) Ihnen bzw. Ihrem Browser eine bestimmte Erkennungsnummer zuweist (sog. «Cookie»). </p>
                <p>Wir verwenden solche Techniken auf unserer Website und erlauben bestimmten Dritten, dies ebenfalls zu tun. Je nach dem Zweck dieser Techniken fragen wir aber nach Ihrer Einwilligung, bevor diese zum Einsatz kommen. Sie können auf Ihre aktuellen Einstellungen hier {context.url} zugreifen. Sie können Ihren Browser so programmieren, dass er bestimmte Cookies oder Alternativtechniken blockiert, täuscht oder bestehende Cookies löscht. Sie können Ihren Browser auch mit Software erweitern, die das Tracking durch bestimmte Dritte sperrt. Weitere Angaben dazu finden Sie auf den Hilfeseiten Ihres Browsers (meist unter dem Stichwort «Datenschutz») oder auf den Websites der Dritten, die wir unten aufführen.
                    Es werden folgende Cookies (Techniken mit vergleichbaren Funktionsweisen wie das Fingerprinting sind hier mitgemeint) unterschieden:
                </p>
                <ul>
                    <li><strong>Notwendige Cookies:</strong> Einige Cookies sind für das Funktionieren der Website als solche oder bestimmte Funktionen notwendig. Sie stellen z.B. sicher, dass Sie zwischen den Seiten wechseln können, ohne dass in einem Formular eingegebene Angaben verloren gehen. Sie stellen ausserdem sicher, dass Sie eingeloggt bleiben. Diese Cookies bestehen nur temporär («Session Cookies»). Falls Sie sie blockieren, funktioniert die Website möglicherweise nicht. Andere Cookies sind notwendig, damit der Server von Ihnen getroffene Entscheide oder Eingaben über eine Sitzung (d.h. einen Besuch der Website) hinaus speichern kann, falls Sie diese Funktion beanspruchen (z.B. gewählte Sprache, erteilte Einwilligung, die Funktion für ein automatisches Einloggen etc.). Diese Cookies haben ein Verfallsdatum von bis zu [24] Monaten. </li>
                    <li><strong>Performance Cookies:</strong> Um unsere Website und entsprechende Angebote zu optimieren und besser auf die Bedürfnisse der Benutzer abzustimmen, nutzen wir Cookies, um die Verwendung unserer Website aufzuzeichnen und zu analysieren, unter Umständen auch über die Sitzung hinaus. Das tun wir durch den Einsatz von Analyse-Diensten von Drittanbietern. Diese haben wir unten aufgeführt. Bevor wir solche Cookies einsetzen, bitten wir Sie um Ihre Zustimmung. Sie können diese über die CookieEinstellungen hier [Link] jederzeit widerrufen. Performance Cookies haben ebenfalls ein Verfallsdatum von bis zu 12 Monaten. Details finden Sie auf den Websites der Drittanbieter.</li>
                    <li><strong>Marketing Cookies:</strong> Wir und unsere Werbe-Vertragspartner haben ein Interesse daran, Werbung zielgruppengenau zu steuern, d.h. möglichst nur denen anzuzeigen, die wir ansprechen wollen. Unsere Werbe-Vertragspartner haben wir unten aufgeführt. Zu diesem Zweck setzen wir und unsere Werbe-Vertragspartner – falls Sie einwilligen – ebenfalls Cookies ein, mit denen die aufgerufenen Inhalte oder geschlossenen Verträge erfasst werden können. Das ermöglicht es uns und unseren WerbeVertragspartnern, Werbung anzuzeigen, bei der wir davon ausgehen können, dass sie Sie interessiert, auf unserer Website, aber auch auf anderen Websites, die Werbung von uns bzw. unseren Werbe-Vertragspartnern anzeigen. Diese Cookies haben je nach Situation eine Verfalldauer von einigen Tagen bis zu 12 Monaten. Falls Sie in die Verwendung dieser Cookies einwilligen, wird Ihnen entsprechende Werbung angezeigt. Falls Sie nicht in diese Cookies einwilligen, sehen Sie nicht weniger Werbung, sondern einfach irgendwelche andere Werbung. </li>
                </ul>

                <p>Neben Marketing-Cookies verwenden wir weitere Techniken, um Online-Werbung auf anderen Websites zu steuern und dadurch Streuverluste zu reduzieren. Wir können bspw. die E-Mail-Adressen unserer Nutzer, Kunden und weiteren Personen, denen wir Werbung anzeigen wollen, an Betreiber von Werbeplattformen übermitteln (z.B. Social Media). Falls diese Personen dort mit derselben E-Mail-Adresse registriert sind (was die Werbeplattformen durch einen Abgleich feststellen), zeigen die Betreiber die von uns geschaltete Werbung zielgerichtet diesen Personen an. Personenbezogene E-Mail-Adressen von nicht bereits bekannten Personen erhalten die Betreiber dabei nicht. Bei bekannten E-Mail-Adressen erfahren sie aber, dass diese Personen mit uns in Verbindung stehen und welche Inhalte sie aufgerufen haben.
                    Wir können auf unserer Website auch weitere Angebote Dritter einbinden, insbesondere von Social Media-Anbietern. Diese Angebote sind dabei standardmässig deaktiviert. Sobald Sie sie aktivieren (z.B. durch Anklicken eines Schalters), können die entsprechenden Anbieter feststellen, dass Sie sich auf unserer Website befinden. Haben Sie beim Social Media-Anbieter ein Konto, kann er Ihnen diese Angabe zuordnen und so Ihre Nutzung von Online-Angeboten verfolgen. Diese Social Media-Anbieter bearbeiten diese Daten in eigener Verantwortung.
                </p>
                <p>Derzeit verwenden wir Angebote der folgende Dienstleister und Werbe-Vertragspartner 
                    (soweit diese zur Werbesteuerung Daten von Ihnen bzw. bei Ihnen gesetzte Cookies verwenden):</p>
               
                 {context.matomo  && <Matomo />}
                 {context.googleAnalaytics && <GoogleAnalytics />}
                 {context.msdynamics && <MSDynamics />}
                 {context.mailchimp && <Mailchimp />}
                 {context.cloudflare && <Cloudflare/>}
                 {context.pipedrive && <Pipedrive/>}

                <h2>14.	Kann diese Datenschutzerklärung geändert werden?</h2>
                <p>Diese Datenschutzerklärung ist nicht Bestandteil eines Vertrags mit Ihnen. Wir können diese Datenschutzerklärung jederzeit anpassen. Die auf dieser Website veröffentlichte Version ist die jeweils aktuelle Fassung. </p>
                <p>Letzte Aktualisierung: {currentYear}</p>
                
             
                
            </div>
        </div>

    );
};
export default Datenschutzerklaerung;
