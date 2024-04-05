package keeper

import (
	"daodemo/x/daodemo/types"
)

var _ types.QueryServer = Keeper{}
