
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNTurboBleSpec.h"

@interface TurboBle : NSObject <NativeTurboBleSpec>
#else
#import <React/RCTBridgeModule.h>

@interface TurboBle : NSObject <RCTBridgeModule>
#endif

@end
