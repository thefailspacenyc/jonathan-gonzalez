import type { Schema, Attribute } from '@strapi/strapi';

export interface SiteWidgetsButton extends Schema.Component {
  collectionName: 'components_site_widgets_buttons';
  info: {
    displayName: 'Button';
    icon: 'command';
  };
  attributes: {
    Button_Link: Attribute.String;
    Button_Text: Attribute.Blocks;
    Toggle: Attribute.Boolean;
  };
}

export interface ProjectComponentsVideo extends Schema.Component {
  collectionName: 'components_project_components_videos';
  info: {
    displayName: 'Video';
    icon: 'eye';
  };
  attributes: {
    Video: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Description: Attribute.Blocks;
  };
}

export interface ProjectComponentsText extends Schema.Component {
  collectionName: 'components_project_components_texts';
  info: {
    displayName: 'Text';
    icon: 'bold';
  };
  attributes: {
    Text: Attribute.Blocks;
  };
}

export interface ProjectComponentsSingleImage extends Schema.Component {
  collectionName: 'components_project_components_single_images';
  info: {
    displayName: 'Single Image';
    icon: 'expand';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Image_Description: Attribute.Blocks;
  };
}

export interface ProjectComponentsGallery extends Schema.Component {
  collectionName: 'components_project_components_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'apps';
  };
  attributes: {
    Gallery: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'site-widgets.button': SiteWidgetsButton;
      'project-components.video': ProjectComponentsVideo;
      'project-components.text': ProjectComponentsText;
      'project-components.single-image': ProjectComponentsSingleImage;
      'project-components.gallery': ProjectComponentsGallery;
    }
  }
}
