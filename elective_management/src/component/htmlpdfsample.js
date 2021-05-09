import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {PDFExport} from '@progress/kendo-react-pdf';


export default class printpage extends React.Component {
    pdfExportComponent;

    render() {
        return (
            <div>
                <div className="example-config">
                    <button
                        className="k-button"
                        onClick={() => {
                        this
                            .pdfExportComponent
                            .save();
                    }}>
                        Export PDF
                    </button>
                </div>

                <PDFExport
                    paperSize="A4"
                    margin="2cm"
                    ref={(component) => this.pdfExportComponent = component}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis libero,
                        lobortis ac rutrum quis, varius a velit. Donec lacus erat, cursus sed porta
                        quis, adipiscing et ligula. Duis volutpat, sem pharetra accumsan pharetra, mi
                        ligula cursus felis, ac aliquet leo diam eget risus. Integer facilisis, justo
                        cursus venenatis vehicula, massa nisl tempor sem, in ullamcorper neque mauris in
                        orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis
                        libero, lobortis ac rutrum quis, varius a velit. Donec lacus erat, cursus sed
                        porta quis, adipiscing et ligula. Duis volutpat, sem pharetra accumsan pharetra,
                        mi ligula cursus felis, ac aliquet leo diam eget risus. Integer facilisis, justo
                        cursus venenatis vehicula, massa nisl tempor sem, in ullamcorper neque mauris in
                        orci.
                    </p>
                    <p>
                        Ut orci ligula, varius ac consequat in, rhoncus in dolor. Mauris pulvinar
                        molestie accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; Aenean velit ligula, pharetra quis aliquam sed,
                        scelerisque sed sapien. Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Aliquam dui mi, vulputate vitae pulvinar
                        ac, condimentum sed eros. Ut orci ligula, varius ac consequat in, rhoncus in
                        dolor. Mauris pulvinar molestie accumsan. Vestibulum ante ipsum primis in
                        faucibus orci luctus et ultrices posuere cubilia Curae; Aenean velit ligula,
                        pharetra quis aliquam sed, scelerisque sed sapien. Class aptent taciti sociosqu
                        ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam dui mi,
                        vulputate vitae pulvinar ac, condimentum sed eros.
                    </p>
                    <p>
                        Aliquam at nisl quis est adipiscing bibendum. Nam malesuada eros facilisis arcu
                        vulputate at aliquam nunc tempor. In commodo scelerisque enim, eget sodales
                        lorem condimentum rutrum. Phasellus sem metus, ultricies at commodo in,
                        tristique non est. Morbi vel mauris eget mauris commodo elementum. Nam eget
                        libero lacus, ut sollicitudin ante. Nam odio quam, suscipit a fringilla eget,
                        dignissim nec arcu. Donec tristique arcu ut sapien elementum pellentesque.
                        Aliquam at nisl quis est adipiscing bibendum. Nam malesuada eros facilisis arcu
                        vulputate at aliquam nunc tempor. In commodo scelerisque enim, eget sodales
                        lorem condimentum rutrum. Phasellus sem metus, ultricies at commodo in,
                        tristique non est. Morbi vel mauris eget mauris commodo elementum. Nam eget
                        libero lacus, ut sollicitudin ante. Nam odio quam, suscipit a fringilla eget,
                        dignissim nec arcu. Donec tristique arcu ut sapien elementum pellentesque.
                    </p>
                    <p>
                        Maecenas vitae eros vel enim molestie cursus. Proin ut lacinia ipsum. Nam at
                        elit arcu, at porttitor ipsum. Praesent id viverra lorem. Nam lacinia elementum
                        fermentum. Nulla facilisi. Nulla bibendum erat sed sem interdum suscipit.
                        Vestibulum eget molestie leo. Aliquam erat volutpat. Ut sed nulla libero.
                        Suspendisse id euismod quam. Aliquam interdum turpis vitae purus consectetur in
                        pulvinar libero accumsan. In id augue dui, ac volutpat ante. Suspendisse purus
                        est, ullamcorper id bibendum sed, placerat id leo. Maecenas vitae eros vel enim
                        molestie cursus. Proin ut lacinia ipsum. Nam at elit arcu, at porttitor ipsum.
                        Praesent id viverra lorem. Nam lacinia elementum fermentum. Nulla facilisi.
                        Nulla bibendum erat sed sem interdum suscipit. Vestibulum eget molestie leo.
                        Aliquam erat volutpat. Ut sed nulla libero. Suspendisse id euismod quam. Aliquam
                        interdum turpis vitae purus consectetur in pulvinar libero accumsan. In id augue
                        dui, ac volutpat ante. Suspendisse purus est, ullamcorper id bibendum sed,
                        placerat id leo.
                    </p>
                </PDFExport>
            </div>
        );
    }
}
