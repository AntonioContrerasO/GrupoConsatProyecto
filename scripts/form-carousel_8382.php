<?php

require_once('FormProcessor.php');

$form = array(
    'subject' => 'Formulario de servicios ',
    'email_message' => 'Tienes un nuevo formulario ',
    'success_redirect' => '',
    'sendIpAddress' => true,
    'email' => array(
    'from' => '',
    'to' => ' administracion@grupoconsat.com'
    ),
    'fields' => array(
    'select-1' => array(
    'order' => 1,
    'type' => 'string',
    'label' => 'Seleccionar la razón de contacto',
    'required' => false,
    'errors' => array(
    'required' => 'Field \'Seleccionar la razón de contacto\' is required.'
    )
    ),
    'name' => array(
    'order' => 2,
    'type' => 'string',
    'label' => 'Name',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Name\' is required.'
    )
    ),
    'email' => array(
    'order' => 3,
    'type' => 'email',
    'label' => 'email',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'email\' is required.'
    )
    ),
    'text' => array(
    'order' => 4,
    'type' => 'string',
    'label' => 'text',
    'required' => false,
    'errors' => array(
    'required' => 'Field \'text\' is required.'
    )
    ),
    'select' => array(
    'order' => 5,
    'type' => 'string',
    'label' => 'Presione la etiqueta para ver seleccionar un servicio',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Presione la etiqueta para ver seleccionar un servicio\' is required.'
    )
    ),
    'message' => array(
    'order' => 6,
    'type' => 'string',
    'label' => 'Message',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Message\' is required.'
    )
    ),
    )
    );

    $processor = new FormProcessor('');
    $processor->process($form);

    ?>