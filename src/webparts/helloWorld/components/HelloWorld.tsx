import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import pnp, { Web } from "sp-pnp-js";
import { IFrameDialog } from "@pnp/spfx-controls-react/lib/IFrameDialog";

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div>
      <IFrameDialog 
          url={'URL till formulär'}
          hidden={false}
          onDismiss={() => {console.log('bye')}}
          modalProps={{
              isBlocking: true,
          }}
          dialogContentProps={{
              
              showCloseButton: true
          }}
          width={'800px'}
          height={'800px'}/>
      </div>
    );
  }
}
