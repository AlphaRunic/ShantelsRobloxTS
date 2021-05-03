interface ReplicatedStorage extends Instance {
	Assets: Folder & {
		GravityCoil: Tool & {
			Handle: Part & {
				CoilSound: Sound;
				Mesh: SpecialMesh;
			};
			Camera: Camera;
			GravityCoilScript: Script;
		};
		ShopButton: ImageButton & {
			Price: TextLabel;
			CoinIcon: ImageLabel;
			UIPadding: UIPadding;
			UICorner: UICorner;
		};
	};
	TS: Folder & {
		Component: ModuleScript;
		classes: Folder & {
			Wave: ModuleScript;
			Exception: ModuleScript;
			ModelAnimator: ModuleScript;
			Spring: ModuleScript;
			Thread: ModuleScript;
		};
		Network: ModuleScript;
		Carbon: ModuleScript;
	};
	Network: Folder;
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			datastore2: Folder & {
				src: ModuleScript & {
					Verifier: ModuleScript;
					Promise: ModuleScript;
					SavingMethods: ModuleScript & {
						OrderedBackups: ModuleScript;
						Standard: ModuleScript;
					};
					Settings: ModuleScript;
					TableUtil: ModuleScript;
					Constants: ModuleScript;
				};
			};
			abbreviate: Folder & {
				src: ModuleScript & {
					commify: ModuleScript;
					numberToString: ModuleScript;
					setSetting: ModuleScript;
					numbersToSortedString: ModuleScript;
					stringToNumber: ModuleScript;
				};
			};
			services: ModuleScript;
			device: Folder & {
				out: ModuleScript & {
					Device: ModuleScript;
				};
			};
			["compiler-types"]: Folder & {
				types: Folder;
			};
			eventemitter: Folder & {
				out: ModuleScript & {
					bindableEmitter: ModuleScript;
				};
			};
			["camera-shaker"]: Folder & {
				CameraShaker: ModuleScript & {
					CameraShakeInstance: ModuleScript;
					CameraShakePresets: ModuleScript;
				};
			};
			["character-viewport"]: Folder & {
				out: ModuleScript;
			};
			roact: Folder & {
				src: ModuleScript & {
					createSpy: ModuleScript;
					createElement: ModuleScript;
					oneChild: ModuleScript;
					RobloxRenderer: ModuleScript;
					createSignal: ModuleScript;
					assertDeepEqual: ModuleScript;
					getDefaultInstanceProperty: ModuleScript;
					invalidSetStateMessages: ModuleScript;
					Binding: ModuleScript;
					internalAssert: ModuleScript;
					NoopRenderer: ModuleScript;
					createReconciler: ModuleScript;
					GlobalConfig: ModuleScript;
					strict: ModuleScript;
					createReconcilerCompat: ModuleScript;
					assign: ModuleScript;
					createRef: ModuleScript;
					Type: ModuleScript;
					Portal: ModuleScript;
					Symbol: ModuleScript;
					PropMarkers: Folder & {
						Ref: ModuleScript;
						Change: ModuleScript;
						Children: ModuleScript;
						Event: ModuleScript;
					};
					createContext: ModuleScript;
					createFragment: ModuleScript;
					ElementUtils: ModuleScript;
					ComponentLifecyclePhase: ModuleScript;
					Config: ModuleScript;
					ElementKind: ModuleScript;
					PureComponent: ModuleScript;
					Logging: ModuleScript;
					Component: ModuleScript;
					SingleEventManager: ModuleScript;
					None: ModuleScript;
				};
			};
			["fast-wait"]: Folder & {
				src: ModuleScript;
				out: ModuleScript;
			};
			types: Folder & {
				include: Folder & {
					generated: Folder;
				};
			};
		};
	};
}
