package daodemo_test

import (
	"testing"

	keepertest "daodemo/testutil/keeper"
	"daodemo/testutil/nullify"
	daodemo "daodemo/x/daodemo/module"
	"daodemo/x/daodemo/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.DaodemoKeeper(t)
	daodemo.InitGenesis(ctx, k, genesisState)
	got := daodemo.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
