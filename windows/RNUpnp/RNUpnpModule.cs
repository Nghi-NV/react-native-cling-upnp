using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Upnp.RNUpnp
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNUpnpModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNUpnpModule"/>.
        /// </summary>
        internal RNUpnpModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNUpnp";
            }
        }
    }
}
