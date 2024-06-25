import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Visualizar from '../Visualizar/Visualizar';
import Agregar from '../Agregar/Agregar';
import ValidarPersonal from '../ValidarPersonas/ValidarPersonal';
import Retirados from '../Retirados/Retirados';
import ValidarMovil from '../ValidarMovil/ValidarMovil';

const Principal = () => {
    const location = useLocation();
    const { role } = location.state || {};
    const [paginaActiva, setPaginaActiva] = useState('Visualizar');

    const cambiarPagina = (pagina) => {
        setPaginaActiva(pagina);
    };

    const renderizarPagina = () => {
        const paginaProps = {
            role,
        };

        switch (paginaActiva) {
            case 'Visualizar':
                return <Visualizar {...paginaProps} />;
            case 'ValidarPersonal':
                return <ValidarPersonal {...paginaProps} />;
            case 'Agregar':
                return <Agregar {...paginaProps} />;
            case 'Retirados':
                return <Retirados {...paginaProps} />;
            case 'ValidarMovil':
                return <ValidarMovil {...paginaProps} />;
            default:
                return null;
        }
    };

    return (
        <div id="Principal-Container">
            <div id="Principal-Menu-Lateral">
                <div id='Principal-Titulo'>
                    <h3>Capacidades</h3>
                </div>
                <div id='Principal-Lista'>
                    <ul>
                        <li onClick={() => cambiarPagina('Visualizar')} className={paginaActiva === 'Visualizar' ? 'active' : ''}>
                            <i className="fas fa-eye"></i>Visualizar
                        </li>
                        <li onClick={() => cambiarPagina('ValidarPersonal')} className={paginaActiva === 'ValidarPersonal' ? 'active' : ''}>
                            <i className="fas fa-user-check"></i>Validar Personal
                        </li>
                        <li onClick={() => cambiarPagina('Agregar')} className={paginaActiva === 'Agregar' ? 'active' : ''}>
                            <i className="fas fa-user-plus"></i>Agregar
                        </li>
                        <li onClick={() => cambiarPagina('Retirados')} className={paginaActiva === 'Retirados' ? 'active' : ''}>
                            <i className="fas fa-user-times"></i>Retirados
                        </li>
                        <li onClick={() => cambiarPagina('ValidarMovil')} className={paginaActiva === 'ValidarMovil' ? 'active' : ''}>
                            <i className="fas fa-car"></i>Validar Movil
                        </li>
                    </ul>
                </div>
            </div>
            {renderizarPagina()}
        </div>
    );
};

export default Principal;